import { getUsers } from "@/actions/getUsers";
import { Navbar } from "./_components/navbar";
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
  
interface ProtectedLayoutProps{
    children: React.ReactNode
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    
    const users = getUsers();
    return(
        <div className="h-full w-full   bg-slate-600"> 
            <Navbar/>
            {children}

        </div>
    )
}
export default ProtectedLayout;