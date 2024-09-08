import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TanstackProvider } from "Providers/Providers";
import BootstrapClient from "components/BootstrapClient";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import { Toaster } from "react-hot-toast";
import "../global.css";
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Toaster position="top-center" />
            <TanstackProvider>
               <Header />
               {children}
               <BootstrapClient />
               <Footer />
            </TanstackProvider>
         </body>
      </html>
   );
}
