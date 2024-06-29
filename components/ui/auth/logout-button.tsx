"use client"
import { signOut } from "next-auth/react"

interface LogoutButtonProps {
    children: React.ReactNode
}

export const LogoutButton = ({
    children
}:LogoutButtonProps) => {
    const onClick = () =>{
        signOut()
    }
    return (
        <span onClick={onClick} className="curser-pointer" >
            {children}
        </span>
    )
}