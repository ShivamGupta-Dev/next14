"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import HeroHome from "@/components/herohomepage";
import { LoginButton } from "@/components/ui/auth/login-button";
import { Button } from "@/components/ui/button"
import EmailCopy from "@/components/ui/emailcopy";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex
      justify-center items-center flex-col overflow-hidden
      mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <HeroHome/>
            <Grid/>
            
        </div>
      </main>  
  );
}
