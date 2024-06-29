import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getSession } from "next-auth/react";
import { auth } from "@/auth";
export const getUsers = async()=>{
  const session = await auth();
    try {
        const users = await db.user.findMany({
            where:{
              NOT:{
                email: session?.user.email
              }
            }
          });
          return users;
    } catch (error:any) {
        return [];
    }
}