import { auth, signOut } from "@/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SettingsPage = async () => {
    const session = await auth();
    const img = JSON.stringify(session?.user.image)
    return(
        <div >
            {JSON.stringify(session)}
            
         <form action={async()=>{
                "use server"
                await signOut();
            }}>
             <button >
                Sign Out
             </button>
             
            </form>
         
        </div>
        
    )
}

export default SettingsPage;