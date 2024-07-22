import Button from "components/common/Button";
import InputField from "components/common/InputField";
import CheckoutSidebar from "./CheckoutSidebar";

export default function CheckoutForm() {
   return (
      <section class="cart-personal padding-y-120">
         <div class="container container-two">
            <div class="row gy-5">
               <div class="col-lg-8 pe-sm-5">
                  <div class="cart-personal__content">
                     <h5 class="cart-personal__title mb-32 fw-bold">
                        Personal information
                     </h5>
                     <form action="#">
                        <InputField
                           name="email"
                           placeholder="Enter your email"
                           required={true}
                           id="email"
                           type="email"
                           label="Email Address"
                        />
                        <InputField
                           name="firstname"
                           placeholder="Your First Name"
                           required={true}
                           id="firstname"
                           type="text"
                           label="First name"
                        />
                        <InputField
                           name="lastname"
                           placeholder="Your Last Name"
                           required={true}
                           id="lastname"
                           type="text"
                           label="Last Name"
                        />

                        <div class="mt-32 mb-32">
                           <InputField
                              name="term"
                              required={true}
                              id="term"
                              type="checkbox"
                              label="Accept our terms and conditions"
                           />
                        </div>
                     </form>
                  </div>

                  <form action="#" class="apply-coupon flx-align gap-3">
                     <input
                        type="text"
                        class="common-input common-input--md w-auto pill"
                        placeholder="Coupon code"
                     />
                     <button
                        type="submit"
                        class="btn btn-main btn-md py-3 px-sm-5 px-4 flx-align gap-2 pill fw-300">
                        {" "}
                        Apply
                     </button>
                  </form>

                  <div class="cart-content__bottom flx-between gap-2">
                     <Button secondary={true} label="Back" url="/cart" />
                     <Button
                        label="Proceed to Payment"
                        url="/checkout/payment"
                     />
                  </div>
               </div>
               <CheckoutSidebar />
            </div>
         </div>
      </section>
   );
}
