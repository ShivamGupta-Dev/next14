import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S7",
  description: "Made By Shivam",
};

export default async function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
           <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            disableTransitionOnChange
           >
            {children}
          </ThemeProvider>
        </body>
      </html>
        
    </SessionProvider>
  );
}
