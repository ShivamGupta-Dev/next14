import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas";
import { getUserbyEmail } from "./data/user";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google"

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
        async authorize(credentials){
            const validatedFields = LoginSchema.safeParse(credentials);
            if(validatedFields.success){
                const{ email , password } = validatedFields.data;
                const user = await getUserbyEmail(email);
                if(!user || !user.password) {
                  return null;
                }
                const passwordsMatch = await bcrypt.compare(
                    password,
                    user.password,
                );

                if (passwordsMatch) {
                  return user;
                };

            }
          return null;
        }
    })
  ],
} satisfies NextAuthConfig