
import { ThemeProvider } from "@/app/provider";

export default async function SettingsLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            
            disableTransitionOnChange
           >
            {children}
          </ThemeProvider>
        
  );
}
