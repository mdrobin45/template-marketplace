export default function ProfileSidebar() {
   return (
      <div className="profile-sidebar">
         <div className="profile-sidebar__item">
            <h5 className="mb-4">Featured Items</h5>
            <div className="featured-item d-flex align-items-center gap-4">
               <div className="featured-item__thumb">
                  <a href="product-details.html" className="link">
                     <img
                        src="assets/images/thumbs/featured-item-img.png"
                        alt=""
                     />
                  </a>
               </div>
               <div className="featured-item__content">
                  <h6 className="featured-item__title mb-2">
                     <a href="product-details.html" className="link">
                        Personal portfolio one page template
                     </a>
                  </h6>
                  <span className="featured-item__text mb-2 text-heading fw-500">
                     250 Purchases
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
                     <span className="star-rating__text text-body font-14">
                        5.0
                     </span>
                     <span className="star-rating__text text-body font-14">
                        (116)
                     </span>
                  </div>
               </div>
            </div>

            <div className="profile-sidebar__author">
               <div className="author-details p-0 border-0 mt-0">
                  <div className="d-flex align-items-center gap-2">
                     <div className="author-details__thumb flex-shrink-0">
                        <img
                           src="assets/images/thumbs/author-details-img.png"
                           alt=""
                        />
                     </div>
                     <div className="author-details__content">
                        <h6 className="author-details__name font-18 mb-2">
                           Oviousdev
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
                           <span className="star-rating__text text-body">
                              5.0
                           </span>
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
                     className="btn btn-outline-light w-100 pill mt-32 fw-600">
                     Total 89 Items
                  </a>
               </div>
            </div>
         </div>
         <div className="profile-sidebar__item">
            <h5 className="profile-sidebar__title">Email to Support</h5>
            <form action="#">
               <div className="row gy-4">
                  <div className="col-12">
                     <label
                        htmlFor="emailsId"
                        className="form-label mb-2 font-18 fw-500">
                        Email
                     </label>
                     <input
                        type="email"
                        className="common-input radius-8 common-input--md"
                        id="emailsId"
                        placeholder="dpmarket@gmail.com"
                     />
                  </div>
                  <div className="col-12">
                     <label
                        htmlFor="messagesId"
                        className="form-label mb-2 font-18 fw-500">
                        Message
                     </label>
                     <textarea
                        className="common-input radius-8"
                        id="messagesId"
                        placeholder="Write Message"></textarea>
                  </div>
                  <div className="col-12">
                     <button
                        type="submit"
                        className="btn btn-main btn-md w-100">
                        Send
                     </button>
                  </div>
               </div>
            </form>
         </div>
         <div className="profile-sidebar__item">
            <h5 className="profile-sidebar__title">Social Profile</h5>
            <ul className="social-list">
               <li className="social-list__item">
                  <a
                     href="https://www.facebook.com"
                     className="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i className="fab fa-facebook-f"></i>
                  </a>
               </li>
               <li className="social-list__item">
                  <a
                     href="https://www.twitter.com"
                     className="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i className="fab fa-twitter"></i>
                  </a>
               </li>
               <li className="social-list__item">
                  <a
                     href="https://www.linkedin.com"
                     className="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i className="fab fa-linkedin-in"></i>
                  </a>
               </li>
               <li className="social-list__item">
                  <a
                     href="https://www.pinterest.com"
                     className="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i className="fab fa-pinterest-p"></i>
                  </a>
               </li>
               <li className="social-list__item">
                  <a
                     href="https://www.pinterest.com"
                     className="social-list__link flx-center bg-white border-white text-heading font-18">
                     <i className="fab fa-youtube"></i>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
}
