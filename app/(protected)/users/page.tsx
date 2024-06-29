"use client"

import { NavUsers } from "@/components/ui/auth/user-nav";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";


const UsersPage = () => {
    const user = useCurrentUser();
    const onClick = ()=>{
        signOut();
    }
  return (
    <div>
        <NavUsers/>

              
    </div>
  );
};

export default UsersPage;
