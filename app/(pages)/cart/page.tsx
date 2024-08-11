import CartList from "components/cartPage/CartList";
import CheckoutBanner from "components/common/checkoutBanner/CheckoutBanner";

export default function CartPage() {
   return (
      <>
         <CheckoutBanner cartActive={true} />
         <CartList />
      </>
   );
}
