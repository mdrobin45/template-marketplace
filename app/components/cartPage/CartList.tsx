import Button from "components/common/Button";

export default function CartList() {
   return (
      <div className="cart padding-y-120">
         <div className="container">
            <div className="cart-content">
               <div className="table-responsive">
                  <table className="table style-two">
                     <thead>
                        <tr>
                           <th>Product Details</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td>
                              <div className="cart-item">
                                 <div className="d-flex align-items-center gap-3">
                                    <div className="cart-item__thumb">
                                       <a
                                          href="product-details.html"
                                          className="link">
                                          <img
                                             src="assets/images/thumbs/product-img2.png"
                                             alt=""
                                             className="cover-img"
                                          />
                                       </a>
                                    </div>
                                    <div className="cart-item__content">
                                       <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                                          <a
                                             href="product-details.html"
                                             className="link">
                                             Digital product name here
                                          </a>
                                       </h6>
                                       <span className="cart-item__price font-18 text-heading fw-500">
                                          Category:
                                          <span className="text-body font-14">
                                             WordPress
                                          </span>
                                       </span>
                                    </div>
                                 </div>
                                 <div className="flx-align gap-4 mt-3 mt-lg-4">
                                    <div className="flx-align gap-2">
                                       <button
                                          type="button"
                                          className="product-card__wishlist style-two">
                                          <i className="fas fa-heart"></i>
                                       </button>
                                       <span className="text-body">
                                          Add to wishlist
                                       </span>
                                    </div>
                                    <button
                                       type="button"
                                       className="rounded-btn delete-btn text-danger hover-text-decoration-underline">
                                       Remove
                                    </button>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="cart-item__count">
                                 <button data-decrease="data-decrease">
                                    <i className="fas fa-minus"></i>
                                 </button>
                                 <input
                                    data-value="data-value"
                                    type="number"
                                    value="2"
                                 />
                                 <button data-increase="data-increase">
                                    <i className="fas fa-plus"></i>
                                 </button>
                              </div>
                           </td>
                           <td>
                              <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                                 $28.00
                              </span>
                           </td>
                           <td>
                              <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">
                                 $56.00
                              </span>
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               <div className="cart-content__bottom flx-between gap-2">
                  <Button
                     secondary={true}
                     label="Continue Shopping"
                     url="/products"
                  />
                  <Button label="Next" url="/checkout" />
               </div>
            </div>
         </div>
      </div>
   );
}
