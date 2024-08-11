import CheckoutForm from "components/checkoutPage/CheckoutForm";
import CheckoutBanner from "components/common/checkoutBanner/CheckoutBanner";

export default function Checkout() {
   return (
      <>
         <CheckoutBanner mailActive={true} />
         <CheckoutForm />
      </>
   );
}
