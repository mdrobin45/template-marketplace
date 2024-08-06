export default function ArchiveTabContent() {
   return (
      <div className="col-xl-9 col-lg-8">
         <div className="tab-content" id="pills-tabContent">
            <div
               className="tab-pane fade show active"
               id="pills-product"
               role="tabpanel"
               aria-labelledby="pills-product-tab"
               tabindex="0">
               <div className="row gy-4 list-grid-wrapper">
                  <div className="col-xl-4 col-sm-6">
                     <div className="product-card section-bg">
                        <div className="product-card__thumb d-flex">
                           <a
                              href="product-details.html"
                              className="link w-100">
                              <img
                                 src="assets/images/thumbs/product-img1.png"
                                 alt=""
                                 className="cover-img"
                              />
                           </a>
                           <button
                              type="button"
                              className="product-card__wishlist">
                              <i className="fas fa-heart"></i>
                           </button>
                        </div>
                        <div className="product-card__content">
                           <h6 className="product-card__title">
                              <a href="product-details.html" className="link">
                                 SaaS dashboard digital products Title here
                              </a>
                           </h6>
                           <div className="product-card__info flx-between gap-2">
                              <span className="product-card__author">
                                 by
                                 <a
                                    href="profile.html"
                                    className="link hover-text-decoration-underline">
                                    themepix
                                 </a>
                              </span>
                              <div className="flx-align gap-2">
                                 <h6 className="product-card__price mb-0">
                                    $120
                                 </h6>
                                 <span className="product-card__prevPrice text-decoration-line-through">
                                    $259
                                 </span>
                              </div>
                           </div>
                           <div className="product-card__bottom flx-between gap-2">
                              <div>
                                 <span className="product-card__sales font-14 mb-2">
                                    1200 Sales
                                 </span>
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
                                    <span className="star-rating__text text-heading fw-500 font-14">
                                       (16)
                                    </span>
                                 </div>
                              </div>
                              <a
                                 href="product-details.html"
                                 className="btn btn-outline-light btn-sm pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <Pagination /> */}
            </div>
         </div>
      </div>
   );
}
