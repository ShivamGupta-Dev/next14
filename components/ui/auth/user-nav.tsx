
import { UserButton } from "@/components/ui/auth/user-button"
import { Button } from "@/components/ui/button"
import  Link  from "next/link"
import { usePathname } from "next/navigation"
import { db } from "@/lib/db"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from "@/components/ui/dropdown-menu"
  import { FaUser } from "react-icons/fa"
  import{ 
      Avatar,
      AvatarImage,
      AvatarFallback
  } from "@/components/ui/avatar"

export const NavUsers= async()=>{
    const users = await db.user.findMany({
        select: {
          name: true,
          image:true,
        },
      });
    return(
        
            <ul>
            {users.map((user, index) => (
                <li className="bg-secondary flex justify-between items-center p-4 rounded-xl
                w-[400px] shadow-sm m-5" key={index}><p className="flex gap-x-2">{user.name}</p>
                
                <Avatar>
                    <AvatarImage src={user.image || ""}/>
                    <AvatarFallback className="bg-sky-200">
                        <FaUser className="text-white"/>
                    </AvatarFallback>
                </Avatar>
                </li>
            ))}
          </ul>
                
         
    )
}