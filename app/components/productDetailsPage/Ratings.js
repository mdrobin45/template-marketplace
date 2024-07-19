export default function ProductRatings() {
   return (
      <div
         className="tab-pane fade"
         id="pills-rating"
         role="tabpanel"
         aria-labelledby="pills-rating-tab"
         tabindex="0">
         <div className="product-review-wrapper">
            <div className="product-review">
               <div className="product-review__top flx-between">
                  <div className="product-review__rating flx-align">
                     <div className="d-flex align-items-center gap-1">
                        <ul className="star-rating">
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                        </ul>
                        <span className="star-rating__text text-body">5.0</span>
                     </div>
                     <span className="product-review__reason">
                        For
                        <span className="product-review__subject">
                           Customer Support
                        </span>
                     </span>
                  </div>
                  <div className="product-review__date">
                     by
                     <a href="#" className="product-review__user text--base">
                        John Doe
                     </a>
                     2 month ago
                  </div>
               </div>
               <div className="product-review__body">
                  <p className="product-review__desc">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quibusdam itaque vitae ex possimus delectus? Voluptas
                     expedita accusantium aperiam quo quod dolore dignissimos
                     rerum praesentium deserunt libero recusandae quisquam est
                     accusamus eos dolorum sit explicabo, sapiente pariatur
                     voluptates veniam aut veritatis, magnam velit similique! Ex
                     similique magni labore aperiam, eius quas molestiae
                     accusantium porro eaque esse minus amet doloribus quo odit
                     illo doloremque.
                  </p>
               </div>
            </div>
            <div className="product-review">
               <div className="product-review__top flx-between">
                  <div className="product-review__rating flx-align">
                     <div className="d-flex align-items-center gap-1">
                        <ul className="star-rating">
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                           <li className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </li>
                        </ul>
                        <span className="star-rating__text text-body">5.0</span>
                     </div>
                     <span className="product-review__reason">
                        For
                        <span className="product-review__subject">
                           Customer Support
                        </span>
                     </span>
                  </div>
                  <div className="product-review__date">
                     by
                     <a href="#" className="product-review__user text--base">
                        John Doe
                     </a>
                     2 month ago
                  </div>
               </div>
               <div className="product-review__body">
                  <p className="product-review__desc">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Quibusdam itaque vitae ex possimus delectus? Voluptas
                     expedita accusantium aperiam quo quod dolore dignissimos
                     rerum praesentium deserunt libero recusandae quisquam est
                     accusamus eos dolorum sit explicabo, sapiente pariatur
                     voluptates veniam aut veritatis, magnam velit similique! Ex
                     similique magni labore aperiam, eius quas molestiae
                     accusantium porro eaque esse minus amet doloribus quo odit
                     illo doloremque.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
