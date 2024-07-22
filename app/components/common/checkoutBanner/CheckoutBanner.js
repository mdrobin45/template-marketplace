import bannerBg from "@/assets/images/gradients/breadcrumb-gradient-bg.png";
import cartIconWhite from "@/assets/images/icons/process-white1.svg";
import mailIconWhite from "@/assets/images/icons/process-white2.svg";
import paymentIcon from "@/assets/images/icons/process-white3.svg";
import orderIcon from "@/assets/images/icons/process-white4.svg";
import mailIcon from "@/assets/images/icons/process2.svg";
import paymentIconWhite from "@/assets/images/icons/process3.svg";
import orderIconWhite from "@/assets/images/icons/process4.svg";
import shape2 from "@/assets/images/shapes/element-moon1.png";
import shape1 from "@/assets/images/shapes/element-moon3.png";
import Image from "next/image";
import "../../style.css";
import Process from "./Process";

export default function CheckoutBanner({
   cartActive,
   mailActive,
   paymentActive,
   orderActive,
}) {
   return (
      <section class="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
         <Image
            src={bannerBg}
            alt=""
            class="bg--gradient"
            width={300}
            height={300}
         />

         <Image
            src={shape1}
            alt=""
            class="element one"
            width={90}
            height={90}
         />
         <Image
            src={shape2}
            alt=""
            class="element three"
            width={90}
            height={90}
         />

         <div class="container container-two">
            <div class="row justify-content-center">
               <div class="col-lg-12">
                  <div class="breadcrumb-four-content">
                     <h3 class="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                        Shopping Cart
                     </h3>
                     {/* <Breadcrumb breadcrumbs={["Home"]} /> */}

                     <ul class="process-list">
                        <Process
                           whiteIcon={cartIconWhite}
                           activeClass="activePage"
                           title="Shopping Cart"
                        />
                        <Process
                           colorIcon={mailIcon}
                           whiteIcon={mailIconWhite}
                           activeClass={mailActive && "activePage"}
                           title="Mailing Address"
                        />
                        <Process
                           colorIcon={paymentIcon}
                           whiteIcon={paymentIconWhite}
                           activeClass={paymentActive && "activePage"}
                           title="Payment Methods"
                        />
                        <Process
                           colorIcon={orderIcon}
                           whiteIcon={orderIconWhite}
                           activeClass={orderActive && "activePage"}
                           title="Order Review"
                        />
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
