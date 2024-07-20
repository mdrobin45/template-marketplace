export default function Templates() {
   console.log("Template page");
   return (
      <div
         class="tab-pane fade"
         id="pills-portfolio"
         role="tabpanel"
         aria-labelledby="pills-portfolio-tab"
         tabindex="0">
         <div class="tab-content" id="pills-tabContent">
            <div
               class="tab-pane fade show active"
               id="pills-product"
               role="tabpanel"
               aria-labelledby="pills-product-tab"
               tabindex="0">
               <div class="row gy-4 list-grid-wrapper">
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                     <div class="product-card section-bg">
                        <div class="product-card__thumb d-flex">
                           <a href="product-details.html" class="link w-100">
                              <img
                                 src="assets/images/thumbs/product-img1.png"
                                 alt=""
                                 class="cover-img"
                              />
                           </a>
                           <button type="button" class="product-card__wishlist">
                              <i class="fas fa-heart"></i>
                           </button>
                        </div>
                        <div class="product-card__content">
                           <h6 class="product-card__title">
                              <a href="product-details.html" class="link">
                                 SaaS dashboard digital products Title here
                              </a>
                           </h6>
                           <div class="product-card__info flx-between gap-2">
                              <span class="product-card__author">
                                 by
                                 <a
                                    href="profile.html"
                                    class="link hover-text-decoration-underline">
                                    themepix
                                 </a>
                              </span>
                              <div class="flx-align gap-2">
                                 <h6 class="product-card__price mb-0">$120</h6>
                                 <span class="product-card__prevPrice text-decoration-line-through">
                                    $259
                                 </span>
                              </div>
                           </div>
                           <div class="product-card__bottom flx-between gap-2">
                              <div>
                                 <span class="product-card__sales font-14 mb-2">
                                    1200 Sales
                                 </span>
                                 <div class="d-flex align-items-center gap-1">
                                    <ul class="star-rating">
                                       <li class="star-rating__item font-11">
                                          <i class="fas fa-star"></i>
                                       </li>
                                       <li class="star-rating__item font-11">
                                          <i class="fas fa-star"></i>
                                       </li>
                                       <li class="star-rating__item font-11">
                                          <i class="fas fa-star"></i>
                                       </li>
                                       <li class="star-rating__item font-11">
                                          <i class="fas fa-star"></i>
                                       </li>
                                       <li class="star-rating__item font-11">
                                          <i class="fas fa-star"></i>
                                       </li>
                                    </ul>
                                    <span class="star-rating__text text-heading fw-500 font-14">
                                       (16)
                                    </span>
                                 </div>
                              </div>
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light btn-sm pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
