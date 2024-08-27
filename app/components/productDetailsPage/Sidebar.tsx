export default function ProductDetailsSidebar() {
   return (
      <div className="col-lg-4">
         <div className="product-sidebar section-bg">
            <div className="product-sidebar__top position-relative flx-between gap-1">
               <button
                  type="button"
                  className="btn-has-dropdown font-heading font-18">
                  Extended License
               </button>
               <div className="license-dropdown">
                  <div className="license-dropdown__item mb-3">
                     <h6 className="license-dropdown__title font-body mb-1 font-16">
                        Regular License
                     </h6>
                     <p className="license-dropdown__desc font-13">
                        Use, by you or one client, in a solitary finished result
                        which end clients are not charged for. The complete cost
                        incorporates the thing cost and a purchaser expense..
                     </p>
                  </div>
                  <div className="license-dropdown__item">
                     <h6 className="license-dropdown__title font-body mb-1 font-16">
                        Extended License
                     </h6>
                     <p className="license-dropdown__desc font-13">
                        Use, by you or one client, in a solitary final result
                        which end clients can be charged for. The all out cost
                        incorporates the thing cost and a purchaser expense.
                     </p>
                  </div>
                  <div className="mt-3 pt-2 border-top text-center">
                     <a
                        href="#"
                        className="link hover-text-decoration-underline font-14 text-main fw-500">
                        View License Details
                     </a>
                  </div>
               </div>
               <h6 className="product-sidebar__title">$1580.00</h6>
            </div>
            <ul className="sidebar-list">
               <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span className="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span className="text">Quality verified</span>
               </li>
               <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span className="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span className="text">Use for a single project</span>
               </li>
               <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
                  <span className="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span className="text">Non-paying users only</span>
               </li>
            </ul>

            <div className="flx-between mt-3">
               <div className="common-check mb-0">
                  <input
                     className="form-check-input"
                     type="checkbox"
                     name="checkbox"
                     id="extended"
                  />
                  <label
                     className="form-check-label mb-0 fw-300 text-body"
                     htmlFor="extended">
                     Extended support 12 month
                  </label>
               </div>
               <div className="flx-align gap-2">
                  <span className="product-card__prevPrice text-decoration-line-through">
                     $12
                  </span>
                  <h6 className="product-card__price mb-0 font-14 fw-500">
                     $7.25
                  </h6>
               </div>
            </div>
            <button
               type="button"
               className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
               <img src="assets/images/icons/add-to-cart.svg" alt="" />
               Add To Cart
            </button>

            <div className="author-details">
               <div className="d-flex align-items-center gap-2">
                  <div className="author-details__thumb flex-shrink-0">
                     <img
                        src="assets/images/thumbs/author-details-img.png"
                        alt=""
                     />
                  </div>
                  <div className="author-details__content">
                     <h6 className="author-details__name font-18 mb-2">
                        <a href="profile.html" className="link hover-text-main">
                           Oviousdev
                        </a>
                     </h6>

                     <span className="d-flex align-items-center gap-1">
                        <span className="star-rating">
                           <span className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </span>
                           <span className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </span>
                           <span className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </span>
                           <span className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </span>
                           <span className="star-rating__item font-11">
                              <i className="fas fa-star"></i>
                           </span>
                        </span>
                        <span className="star-rating__text text-body">5.0</span>
                     </span>
                  </div>
               </div>

               <ul className="badge-list flx-align gap-2 mt-3">
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge1.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge2.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge3.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge4.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge5.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge6.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge7.png" alt="" />
                  </li>
                  <li
                     className="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge8.png" alt="" />
                  </li>
               </ul>
               <a
                  href="profile.html"
                  className="btn btn-outline-light w-100 pill mt-32">
                  View Portfolio
               </a>
            </div>
            <ul className="meta-attribute">
               <li className="meta-attribute__item">
                  <span className="name">Last Update</span>
                  <span className="details">Feb 21, 2024</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Published</span>
                  <span className="details">Feb 15, 2024</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Category</span>
                  <span className="details">Themes</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Widget Ready</span>
                  <span className="details">Yes</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">High Resolution</span>
                  <span className="details">Yes</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Copatible with</span>
                  <span className="details">
                     <a href="#" className="hover-text-decoration-underline">
                        Contact Form 7,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        Calendar,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        Elementor,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        Elementor Pro,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        WooCommerce 8.x.x
                     </a>
                  </span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">File size</span>
                  <span className="details">85 MB</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Framework</span>
                  <span className="details">Underscores</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Software Version</span>
                  <span className="details">
                     <a href="#" className="hover-text-decoration-underline">
                        WordPress 6.3.x,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        WordPress 6.2.x,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        WordPress 6.1.x,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        WordPress 6.0.x,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        WordPress 5.9.x,
                     </a>
                  </span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Marketplace Files Included</span>
                  <span className="details">
                     <a href="#" className="hover-text-decoration-underline">
                        PHP Files,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        CSS Files,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        SCSS Files,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        JS Files,
                     </a>
                  </span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Layout</span>
                  <span className="details">Responsive</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Tags</span>
                  <span className="details">
                     <a href="#" className="hover-text-decoration-underline">
                        theme,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        web design,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        minimal design,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        trendy,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        responsive,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        wordpress,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        saas,
                     </a>
                     <a href="#" className="hover-text-decoration-underline">
                        dashboard,
                     </a>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   );
}
