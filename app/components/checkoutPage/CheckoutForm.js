import Button from "components/common/Button";
import InputField from "components/common/InputField";
import CheckoutSidebar from "./CheckoutSidebar";

export default function CheckoutForm() {
   return (
      <section className="cart-personal padding-y-120">
         <div className="container container-two">
            <div className="row gy-5">
               <div className="col-lg-8 pe-sm-5">
                  <div className="cart-personal__content">
                     <h5 className="cart-personal__title mb-32 fw-bold">
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

                        <div className="mt-32 mb-32">
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

                  <form action="#" className="apply-coupon flx-align gap-3">
                     <input
                        type="text"
                        className="common-input common-input--md w-auto pill"
                        placeholder="Coupon code"
                     />
                     <button
                        type="submit"
                        className="btn btn-main btn-md py-3 px-sm-5 px-4 flx-align gap-2 pill fw-300">
                        {" "}
                        Apply
                     </button>
                  </form>

                  <div className="cart-content__bottom flx-between gap-2">
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
