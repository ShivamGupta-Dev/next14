import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();
    return(
        <div className="bg-gray-800">
            <h1 className="text-blue-100 bg-slate-500 text-4xl">
              Name: {session?.user?.name}
              
            </h1>
            <h1 className="text-blue-100 bg-slate-500 text-4xl">
              Email: {session?.user?.email}
            </h1>
            <h1 className="text-blue-100 bg-slate-500 text-4xl">
              Image: {session?.user?.image}
            </h1>
            <form action={async()=>{
                "use server"
                await signOut();
            }}>
             <Button className="text-3xl">
                Sign Out
             </Button>
             
            </form>
        </div>
        
    )
}

export default SettingsPage;