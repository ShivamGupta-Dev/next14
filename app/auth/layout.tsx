import { Spotlight } from "@/components/ui/Spotlight";

const AuthLayout = ({
    children 
}: {
        children: React.ReactNode
}) => {
    return(
        <div className="fex justify-center">
            
            
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            
            <div className='flex justify-center relative top-7'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    
                <div>
                    {children}
            </div>
                    
                </div>
            </div>
        </div>
    );
}
export default AuthLayout;