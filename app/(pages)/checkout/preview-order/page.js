import CheckoutBanner from "components/common/checkoutBanner/CheckoutBanner";

export default function PreviewOrder() {
   return (
      <>
         <CheckoutBanner
            orderActive={true}
            mailActive={true}
            paymentActive={true}
         />
         <h2>Order Preview</h2>
      </>
   );
}
