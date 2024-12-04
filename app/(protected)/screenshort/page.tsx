import Hero2 from "@/components/hero2";
import { Spotlight } from "@/components/ui/Spotlight";

const ScreenshortPage = () => {
    return(
      <main className="relative bg-black-100 flex
      justify-center items-center flex-col overflow-hidden
      mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
            <Hero2/>
        </div>
      </main>  
    );
}
 
export default ScreenshortPage;