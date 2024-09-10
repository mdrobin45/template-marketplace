import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "components/BootstrapClient";
import Footer from "components/common/Footer";
import Header from "components/common/Header/Header";
import "../global.css";
export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <Header />
            {children}
            <BootstrapClient />
            <Footer />
         </body>
      </html>
   );
}
