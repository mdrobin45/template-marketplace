export default function ProductDetailsSidebar() {
   return (
      <div class="col-lg-4">
         <div class="product-sidebar section-bg">
            <div class="product-sidebar__top position-relative flx-between gap-1">
               <button
                  type="button"
                  class="btn-has-dropdown font-heading font-18">
                  Extended License
               </button>
               <div class="license-dropdown">
                  <div class="license-dropdown__item mb-3">
                     <h6 class="license-dropdown__title font-body mb-1 font-16">
                        Regular License
                     </h6>
                     <p class="license-dropdown__desc font-13">
                        Use, by you or one client, in a solitary finished result
                        which end clients are not charged for. The complete cost
                        incorporates the thing cost and a purchaser expense..
                     </p>
                  </div>
                  <div class="license-dropdown__item">
                     <h6 class="license-dropdown__title font-body mb-1 font-16">
                        Extended License
                     </h6>
                     <p class="license-dropdown__desc font-13">
                        Use, by you or one client, in a solitary final result
                        which end clients can be charged for. The all out cost
                        incorporates the thing cost and a purchaser expense.
                     </p>
                  </div>
                  <div class="mt-3 pt-2 border-top text-center">
                     <a
                        href="#"
                        class="link hover-text-decoration-underline font-14 text-main fw-500">
                        View License Details
                     </a>
                  </div>
               </div>
               <h6 class="product-sidebar__title">$1580.00</h6>
            </div>
            <ul class="sidebar-list">
               <li class="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span class="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span class="text">Quality verified</span>
               </li>
               <li class="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                  <span class="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span class="text">Use for a single project</span>
               </li>
               <li class="sidebar-list__item flx-align gap-2 font-14 fw-300">
                  <span class="icon">
                     <img src="assets/images/icons/check-cirlce.svg" alt="" />
                  </span>
                  <span class="text">Non-paying users only</span>
               </li>
            </ul>

            <div class="flx-between mt-3">
               <div class="common-check mb-0">
                  <input
                     class="form-check-input"
                     type="checkbox"
                     name="checkbox"
                     id="extended"
                  />
                  <label
                     class="form-check-label mb-0 fw-300 text-body"
                     for="extended">
                     Extended support 12 month
                  </label>
               </div>
               <div class="flx-align gap-2">
                  <span class="product-card__prevPrice text-decoration-line-through">
                     $12
                  </span>
                  <h6 class="product-card__price mb-0 font-14 fw-500">$7.25</h6>
               </div>
            </div>
            <button
               type="button"
               class="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
               <img src="assets/images/icons/add-to-cart.svg" alt="" />
               Add To Cart
            </button>

            <div class="author-details">
               <div class="d-flex align-items-center gap-2">
                  <div class="author-details__thumb flex-shrink-0">
                     <img
                        src="assets/images/thumbs/author-details-img.png"
                        alt=""
                     />
                  </div>
                  <div class="author-details__content">
                     <h6 class="author-details__name font-18 mb-2">
                        <a href="profile.html" class="link hover-text-main">
                           Oviousdev
                        </a>
                     </h6>

                     <span class="d-flex align-items-center gap-1">
                        <span class="star-rating">
                           <span class="star-rating__item font-11">
                              <i class="fas fa-star"></i>
                           </span>
                           <span class="star-rating__item font-11">
                              <i class="fas fa-star"></i>
                           </span>
                           <span class="star-rating__item font-11">
                              <i class="fas fa-star"></i>
                           </span>
                           <span class="star-rating__item font-11">
                              <i class="fas fa-star"></i>
                           </span>
                           <span class="star-rating__item font-11">
                              <i class="fas fa-star"></i>
                           </span>
                        </span>
                        <span class="star-rating__text text-body">5.0</span>
                     </span>
                  </div>
               </div>

               <ul class="badge-list flx-align gap-2 mt-3">
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge1.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge2.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge3.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge4.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge5.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge6.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge7.png" alt="" />
                  </li>
                  <li
                     class="badge-list__item"
                     data-bs-toggle="tooltip"
                     data-bs-placement="top"
                     data-bs-title="Badge Info">
                     <img src="assets/images/thumbs/badge8.png" alt="" />
                  </li>
               </ul>
               <a
                  href="profile.html"
                  class="btn btn-outline-light w-100 pill mt-32">
                  View Portfolio
               </a>
            </div>
            <ul class="meta-attribute">
               <li class="meta-attribute__item">
                  <span class="name">Last Update</span>
                  <span class="details">Feb 21, 2024</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Published</span>
                  <span class="details">Feb 15, 2024</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Category</span>
                  <span class="details">Themes</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Widget Ready</span>
                  <span class="details">Yes</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">High Resolution</span>
                  <span class="details">Yes</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Copatible with</span>
                  <span class="details">
                     <a href="#" class="hover-text-decoration-underline">
                        Contact Form 7,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        Calendar,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        Elementor,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        Elementor Pro,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        WooCommerce 8.x.x
                     </a>
                  </span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">File size</span>
                  <span class="details">85 MB</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Framework</span>
                  <span class="details">Underscores</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Software Version</span>
                  <span class="details">
                     <a href="#" class="hover-text-decoration-underline">
                        WordPress 6.3.x,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        WordPress 6.2.x,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        WordPress 6.1.x,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        WordPress 6.0.x,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        WordPress 5.9.x,
                     </a>
                  </span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Marketplace Files Included</span>
                  <span class="details">
                     <a href="#" class="hover-text-decoration-underline">
                        PHP Files,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        CSS Files,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        SCSS Files,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        JS Files,
                     </a>
                  </span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Layout</span>
                  <span class="details">Responsive</span>
               </li>
               <li class="meta-attribute__item">
                  <span class="name">Tags</span>
                  <span class="details">
                     <a href="#" class="hover-text-decoration-underline">
                        theme,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        web design,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        minimal design,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        trendy,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        responsive,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        wordpress,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        saas,
                     </a>
                     <a href="#" class="hover-text-decoration-underline">
                        dashboard,
                     </a>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   );
}
