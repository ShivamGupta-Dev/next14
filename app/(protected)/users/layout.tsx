import UserList from "@/components/ui/auth/user-nav";
import Sidebar from "../_components/sidebar/Sidebar";
import { getUsers } from "@/actions/getUsers";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default async function UsersLayout({
    children
}:{
    children: React.ReactNode;
}) {
    const users = await getUsers();
    return(
        <Sidebar>
            <div className="h-full">
                <UserList items={users}/>
                {children}
                
            </div>
        
            
            
        </Sidebar>
        
        
      
    )
}