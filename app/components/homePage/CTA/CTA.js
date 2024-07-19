import Affiliate from "./Affiliate";
import BecomeSeller from "./BecomeSeller";
import Support from "./Support";

export default function CTA() {
   return (
      <section className="seller padding-y-120">
         <div className="container container-two">
            <div className="row gy-4">
               <BecomeSeller />
               <Affiliate />
               <Support />
            </div>
         </div>
      </section>
   );
}
