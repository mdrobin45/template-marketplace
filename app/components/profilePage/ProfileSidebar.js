export default function ProfileSidebar() {
   return (
      <div class="profile-sidebar">
         <div class="profile-sidebar__item">
            <h5 class="mb-4">Featured Items</h5>
            <div class="featured-item d-flex align-items-center gap-4">
               <div class="featured-item__thumb">
                  <a href="product-details.html" class="link">
                     <img
                        src="assets/images/thumbs/featured-item-img.png"
                        alt=""
                     />
                  </a>
               </div>
               <div class="featured-item__content">
                  <h6 class="featured-item__title mb-2">
                     <a href="product-details.html" class="link">
                        Personal portfolio one page template
                     </a>
                  </h6>
                  <span class="featured-item__text mb-2 text-heading fw-500">
                     250 Purchases
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
                     <span class="star-rating__text text-body font-14">
                        5.0
                     </span>
                     <span class="star-rating__text text-body font-14">
                        (116)
                     </span>
                  </div>
               </div>
            </div>

            <div class="profile-sidebar__author">
               <div class="author-details p-0 border-0 mt-0">
                  <div class="d-flex align-items-center gap-2">
                     <div class="author-details__thumb flex-shrink-0">
                        <img
                           src="assets/images/thumbs/author-details-img.png"
                           alt=""
                        />
                     </div>
                     <div class="author-details__content">
                        <h6 class="author-details__name font-18 mb-2">
                           Oviousdev
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
                     class="btn btn-outline-light w-100 pill mt-32 fw-600">
                     Total 89 Items
                  </a>
               </div>
            </div>
         </div>
         <div class="profile-sidebar__item">
            <h5 class="profile-sidebar__title">Email to Support</h5>
            <form action="#">
               <div class="row gy-4">
                  <div class="col-12">
                     <label
                        for="emailsId"
                        class="form-label mb-2 font-18 fw-500">
                        Email
                     </label>
                     <input
                        type="email"
                        class="common-input radius-8 common-input--md"
                        id="emailsId"
                        placeholder="dpmarket@gmail.com"
                     />
                  </div>
                  <div class="col-12">
                     <label
                        for="messagesId"
                        class="form-label mb-2 font-18 fw-500">
                        Message
                     </label>
                     <textarea
                        class="common-input radius-8"
                        id="messagesId"
                        placeholder="Write Message"></textarea>
                  </div>
                  <div class="col-12">
                     <button type="submit" class="btn btn-main btn-md w-100">
                        Send
                     </button>
                  </div>
               </div>
            </form>
         </div>
         <div class="profile-sidebar__item">
            <h5 class="profile-sidebar__title">Social Profile</h5>
            <ul class="social-list">
               <li class="social-list__item">
                  <a
                     href="https://www.facebook.com"
                     class="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i class="fab fa-facebook-f"></i>
                  </a>
               </li>
               <li class="social-list__item">
                  <a
                     href="https://www.twitter.com"
                     class="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i class="fab fa-twitter"></i>
                  </a>
               </li>
               <li class="social-list__item">
                  <a
                     href="https://www.linkedin.com"
                     class="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i class="fab fa-linkedin-in"></i>
                  </a>
               </li>
               <li class="social-list__item">
                  <a
                     href="https://www.pinterest.com"
                     class="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i class="fab fa-pinterest-p"></i>
                  </a>
               </li>
               <li class="social-list__item">
                  <a
                     href="https://www.pinterest.com"
                     class="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i class="fab fa-youtube"></i>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
