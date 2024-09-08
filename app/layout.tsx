import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "lib/redux/StoreProvider";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./global.css";

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

interface RootLayoutProps {
   children: ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <body>
            <StoreProvider>
               <Toaster position="top-center" />
               {children}
            </StoreProvider>
         </body>
      </html>
   );
}
