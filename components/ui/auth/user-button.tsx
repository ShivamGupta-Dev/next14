"use client"

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
import { LoginButton } from "./login-button"

export const UserButton = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src=""/>
                    <AvatarFallback className="bg-sky-200">
                        <FaUser className="text-white"/>
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <LoginButton>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </LoginButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}