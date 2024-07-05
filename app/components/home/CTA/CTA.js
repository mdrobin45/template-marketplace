import Affiliate from "./Affiliate";
import BecomeSeller from "./BecomeSeller";
import Support from "./Support";

export default function CTA() {
   return (
      <section class="seller padding-y-120">
         <div class="container container-two">
            <div class="row gy-4">
               <BecomeSeller />
               <Affiliate />
               <Support />
            </div>
         </div>
      </section>
   );
}
