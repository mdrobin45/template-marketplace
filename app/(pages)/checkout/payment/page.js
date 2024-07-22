import curveBg2 from "@/assets/images/shapes/pattern-curve-five.png";
import curveBg1 from "@/assets/images/shapes/pattern-curve-six.png";
import CheckoutBanner from "components/common/checkoutBanner/CheckoutBanner";
import Image from "next/image";

export default function PaymentMethods() {
   return (
      <>
         <CheckoutBanner mailActive={true} paymentActive={true} />
         <section class="cart-payment padding-y-120 overflow-hidden">
            <div class="container container-two">
               <div class="cart-payment__box position-relative z-index-1 overflow-hidden">
                  <Image
                     src={curveBg1}
                     width={700}
                     height={700}
                     alt=""
                     class="position-absolute end-0 top-0 z-index--1"
                  />
                  <Image
                     src={curveBg2}
                     width={700}
                     height={700}
                     alt=""
                     class="position-absolute start-0 top-0 z-index--1"
                  />

                  <div class="row justify-content-center">
                     <div class="col-lg-8 col-sm-10">
                        <h5 class="cart-payment__title mb-4">Card Details</h5>
                        <div class="cart-payment-card">
                           <form action="#">
                              <div class="row gy-4">
                                 <div class="col-lg-12">
                                    <label
                                       for="nmbr"
                                       class="form-label mb-2 font-18 font-heading fw-600">
                                       Card Number
                                    </label>
                                    <div class="position-relative">
                                       <input
                                          type="text"
                                          class="common-input common-input--bg common-input--withIcon"
                                          id="nmbr"
                                          placeholder="5896  1456  0040   2558"
                                       />
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <label
                                       for="holder"
                                       class="form-label mb-2 font-18 font-heading fw-600">
                                       Card Holder
                                    </label>
                                    <div class="position-relative">
                                       <input
                                          type="text"
                                          class="common-input common-input--bg common-input--withIcon"
                                          id="holder"
                                          placeholder="Michel John"
                                       />
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <label
                                       for="expire"
                                       class="form-label mb-2 font-18 font-heading fw-600">
                                       Expire Date
                                    </label>
                                    <div class="position-relative">
                                       <input
                                          type="text"
                                          class="common-input common-input--bg common-input--withIcon"
                                          id="expire"
                                          placeholder="09/26"
                                       />
                                    </div>
                                 </div>
                                 <div class="col-lg-6">
                                    <label
                                       for="CVV"
                                       class="form-label mb-2 font-18 font-heading fw-600">
                                       CVV
                                    </label>
                                    <div class="position-relative">
                                       <input
                                          type="text"
                                          class="common-input common-input--bg common-input--withIcon"
                                          id="CVV"
                                          placeholder="853"
                                       />
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="common-check my-2">
                                       <input
                                          class="form-check-input"
                                          type="checkbox"
                                          name="checkbox"
                                          id="agree"
                                       />
                                       <label
                                          class="form-check-label mb-0 fw-400 font-16 text-body"
                                          for="agree">
                                          Save my details for future purchase
                                       </label>
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <div class="total-bill flx-between">
                                       <span class="text text-heading font-20 fw-500 font-heading">
                                          Total Amount
                                       </span>
                                       <span class="amount text-heading font-20 fw-500 font-heading">
                                          $274.00
                                       </span>
                                    </div>
                                 </div>
                                 <div class="col-lg-12">
                                    <a
                                       href="cart-thank-you.html"
                                       class="btn btn-main btn-lg w-100 pill">
                                       {" "}
                                       Confirm Payment
                                    </a>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="cart-content__bottom flx-between gap-2">
                  <a
                     href="cart-personal.html"
                     class="btn btn-outline-light flx-align gap-2 pill btn-lg">
                     <span class="icon line-height-1 font-20">
                        <i class="las la-arrow-left"></i>
                     </span>
                     Back
                  </a>
               </div>
            </div>
         </section>
         /
      </>
   );
}
