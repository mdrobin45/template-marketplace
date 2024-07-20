import bannerBg from "@/assets/images/gradients/breadcrumb-gradient-bg.png";
import shape2 from "@/assets/images/shapes/element-moon1.png";
import shape1 from "@/assets/images/shapes/element-moon3.png";
import Image from "next/image";
import "./style.css";

export default function PageBanner() {
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
                        <li class="process-list__item activePage">
                           <a href="cart.html" class="process-list__link">
                              <div class="icons">
                                 <span class="icon white">
                                    <img
                                       src="assets/images/icons/process-white1.svg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <span class="text">Shopping Cart</span>
                           </a>
                        </li>
                        <li class="process-list__item">
                           <a
                              href="cart-personal.html"
                              class="process-list__link">
                              <div class="icons">
                                 <span class="icon white">
                                    <img
                                       src="assets/images/icons/process-white2.svg"
                                       alt=""
                                    />
                                 </span>
                                 <span class="icon colored">
                                    <img
                                       src="assets/images/icons/process2.svg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <span class="text">Mailing Address</span>
                           </a>
                        </li>
                        <li class="process-list__item">
                           <a
                              href="cart-payment.html"
                              class="process-list__link">
                              <div class="icons">
                                 <span class="icon white">
                                    <img
                                       src="assets/images/icons/process-white3.svg"
                                       alt=""
                                    />
                                 </span>
                                 <span class="icon colored">
                                    <img
                                       src="assets/images/icons/process3.svg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <span class="text">Payment Methods</span>
                           </a>
                        </li>
                        <li class="process-list__item">
                           <a
                              href="cart-thank-you.html"
                              class="process-list__link">
                              <div class="icons">
                                 <span class="icon white">
                                    <img
                                       src="assets/images/icons/process-white4.svg"
                                       alt=""
                                    />
                                 </span>
                                 <span class="icon colored">
                                    <img
                                       src="assets/images/icons/process4.svg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <span class="text">Preview Order</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
