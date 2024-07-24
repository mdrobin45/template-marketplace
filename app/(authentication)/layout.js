import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "components/BootstrapClient";
import { TanstackProvider } from "Providers/Providers";
import "../global.css";
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <TanstackProvider>
               {children}
               <BootstrapClient />
            </TanstackProvider>
         </body>
      </html>
   );
}
