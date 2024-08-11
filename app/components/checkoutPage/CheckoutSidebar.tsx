export default function CheckoutSidebar() {
   return (
      <div className="col-lg-4">
         <div className="order-summary">
            <h5 className="order-summary__title mb-32">Order Summary</h5>
            <ul className="billing-list">
               <li className="billing-list__item flx-between">
                  <span className="text text-heading fw-500">
                     You have 3 items
                  </span>
                  <span className="amount text-heading fw-500">$259.00</span>
               </li>
               <li className="billing-list__item flx-between">
                  <span className="text text-heading fw-500">Discount</span>
                  <span className="amount text-body">$00.00</span>
               </li>
               <li className="billing-list__item flx-between">
                  <span className="text text-heading fw-500">Handling Fee</span>
                  <span className="amount text-body">$15.00</span>
               </li>
               <li className="billing-list__item flx-between">
                  <span className="text text-heading fw-500">Subtotal</span>
                  <span className="amount text-body">$15.00</span>
               </li>
               <li className="billing-list__item flx-between">
                  <span className="text text-heading font-20 fw-500 font-heading">
                     Total
                  </span>
                  <span className="amount text-heading font-20 fw-500 font-heading">
                     $274.00
                  </span>
               </li>
            </ul>
            <button
               type="submit"
               className="btn btn-outline-light pill btn-lg w-100 mt-32">
               <span className="icon icon-left"></span>
               Purchased Now
            </button>
         </div>
      </div>
   );
}
