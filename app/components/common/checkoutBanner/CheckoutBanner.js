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

export default function CheckoutBanner() {
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
                     <ul class="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                        <li class="breadcrumb-list__item font-14 text-body">
                           <a
                              href="index.html"
                              class="breadcrumb-list__link text-body hover-text-main">
                              Home
                           </a>
                        </li>
                        <li class="breadcrumb-list__item font-14 text-body">
                           <span class="breadcrumb-list__icon font-10">
                              <i class="fas fa-chevron-right"></i>
                           </span>
                        </li>
                        <li class="breadcrumb-list__item font-14 text-body">
                           <span class="breadcrumb-list__text">
                              My Shopping Cart
                           </span>
                        </li>
                     </ul>

                     <ul class="process-list">
                        <Process
                           whiteIcon={cartIconWhite}
                           activeClass="activePage"
                           title="Shopping Cart"
                        />
                        <Process
                           colorIcon={mailIcon}
                           whiteIcon={mailIconWhite}
                           title="Mailing Address"
                        />
                        <Process
                           colorIcon={paymentIcon}
                           whiteIcon={paymentIconWhite}
                           title="Payment Methods"
                        />
                        <Process
                           colorIcon={orderIcon}
                           whiteIcon={orderIconWhite}
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
