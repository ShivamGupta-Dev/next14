"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
      Command,
      CommandDialog,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator,
      CommandShortcut,
    } from "@/components/ui/command"
import { useCurrentUser } from "@/hooks/use-current-user";

    import { User } from "@prisma/client";
import { FaUser } from "react-icons/fa";
interface UserBoxProps {
  data: User;
}
const SettingsPage: React.FC<UserBoxProps> = ({ data }) => {
  
    const user = useCurrentUser();
  return (
    
    
    <div className="w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <Avatar >
          <AvatarImage src={user.image || ""} />
          <AvatarFallback className="bg-sky-500 flex justify-center items-center">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      <Command>
      <CommandList>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Edit Profile</CommandItem>
          <CommandItem>Password and security</CommandItem>
          <CommandItem>Help</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    </div>
    
    
  );
};

export default SettingsPage;
