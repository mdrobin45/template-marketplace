export default function CheckoutSidebar() {
   return (
      <div class="col-lg-4">
         <div class="order-summary">
            <h5 class="order-summary__title mb-32">Order Summary</h5>
            <ul class="billing-list">
               <li class="billing-list__item flx-between">
                  <span class="text text-heading fw-500">You have 3 items</span>
                  <span class="amount text-heading fw-500">$259.00</span>
               </li>
               <li class="billing-list__item flx-between">
                  <span class="text text-heading fw-500">Discount</span>
                  <span class="amount text-body">$00.00</span>
               </li>
               <li class="billing-list__item flx-between">
                  <span class="text text-heading fw-500">Handling Fee</span>
                  <span class="amount text-body">$15.00</span>
               </li>
               <li class="billing-list__item flx-between">
                  <span class="text text-heading fw-500">Subtotal</span>
                  <span class="amount text-body">$15.00</span>
               </li>
               <li class="billing-list__item flx-between">
                  <span class="text text-heading font-20 fw-500 font-heading">
                     Total
                  </span>
                  <span class="amount text-heading font-20 fw-500 font-heading">
                     $274.00
                  </span>
               </li>
            </ul>
            <button
               type="submit"
               class="btn btn-outline-light pill btn-lg w-100 mt-32">
               <span class="icon icon-left"></span>
               Purchased Now
            </button>
         </div>
      </div>
   );
}
