import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "components/BootstrapClient";
import { TanstackProvider } from "lib/Providers/TanstackQuery";
import "../global.css";
export default function AuthLayout({ children }) {
   return (
      <>
         <TanstackProvider>
            {children}
            <BootstrapClient />
         </TanstackProvider>
      </>
   );
}
