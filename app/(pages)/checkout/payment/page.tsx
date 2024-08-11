import curveBg2 from "@/assets/images/shapes/pattern-curve-five.png";
import curveBg1 from "@/assets/images/shapes/pattern-curve-six.png";
import Button from "components/common/Button";
import CheckoutBanner from "components/common/checkoutBanner/CheckoutBanner";
import Image from "next/image";

export default function PaymentMethods() {
   return (
      <>
         <CheckoutBanner mailActive={true} paymentActive={true} />
         <section className="cart-payment padding-y-120 overflow-hidden">
            <div className="container container-two">
               <div className="cart-payment__box position-relative z-index-1 overflow-hidden">
                  <Image
                     src={curveBg1}
                     width={700}
                     height={700}
                     alt=""
                     className="position-absolute end-0 top-0 z-index--1"
                  />
                  <Image
                     src={curveBg2}
                     width={700}
                     height={700}
                     alt=""
                     className="position-absolute start-0 top-0 z-index--1"
                  />

                  <div className="row justify-content-center">
                     <div className="col-lg-8 col-sm-10">
                        <h5 className="cart-payment__title mb-4">
                           Card Details
                        </h5>
                        <div className="cart-payment-card">
                           <form action="#">
                              <div className="row gy-4">
                                 <div className="col-lg-12">
                                    <label
                                       htmlFor="nmbr"
                                       className="form-label mb-2 font-18 font-heading fw-600">
                                       Card Number
                                    </label>
                                    <div className="position-relative">
                                       <input
                                          type="text"
                                          className="common-input common-input--bg common-input--withIcon"
                                          id="nmbr"
                                          placeholder="5896  1456  0040   2558"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <label
                                       htmlFor="holder"
                                       className="form-label mb-2 font-18 font-heading fw-600">
                                       Card Holder
                                    </label>
                                    <div className="position-relative">
                                       <input
                                          type="text"
                                          className="common-input common-input--bg common-input--withIcon"
                                          id="holder"
                                          placeholder="Michel John"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <label
                                       htmlFor="expire"
                                       className="form-label mb-2 font-18 font-heading fw-600">
                                       Expire Date
                                    </label>
                                    <div className="position-relative">
                                       <input
                                          type="text"
                                          className="common-input common-input--bg common-input--withIcon"
                                          id="expire"
                                          placeholder="09/26"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <label
                                       htmlFor="CVV"
                                       className="form-label mb-2 font-18 font-heading fw-600">
                                       CVV
                                    </label>
                                    <div className="position-relative">
                                       <input
                                          type="text"
                                          className="common-input common-input--bg common-input--withIcon"
                                          id="CVV"
                                          placeholder="853"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="common-check my-2">
                                       <input
                                          className="form-check-input"
                                          type="checkbox"
                                          name="checkbox"
                                          id="agree"
                                       />
                                       <label
                                          className="form-check-label mb-0 fw-400 font-16 text-body"
                                          htmlFor="agree">
                                          Save my details for future purchase
                                       </label>
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <div className="total-bill flx-between">
                                       <span className="text text-heading font-20 fw-500 font-heading">
                                          Total Amount
                                       </span>
                                       <span className="amount text-heading font-20 fw-500 font-heading">
                                          $274.00
                                       </span>
                                    </div>
                                 </div>
                                 <div className="col-lg-12">
                                    <a
                                       href="cart-thank-you.html"
                                       className="btn btn-main btn-lg w-100 pill">
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

               <div className="cart-content__bottom flx-between gap-2">
                  <Button label="Back" url="/checkout" secondary={true} />
               </div>
            </div>
         </section>
         /
      </>
   );
}
