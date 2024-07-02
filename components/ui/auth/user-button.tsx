"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { LoginButton } from "./login-button";
import { useCurrentUser } from "@/hooks/use-current-user";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity">
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-200 flex justify-center items-center">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-md py-2">
        <LoginButton>
          <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2 transition-colors">
            Logout
          </DropdownMenuItem>
        </LoginButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
