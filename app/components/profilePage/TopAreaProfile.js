export default function TopAreaProfile() {
   return (
      <section class="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">
         <img
            src="assets/images/gradients/breadcrumb-gradient-bg.png"
            alt=""
            class="bg--gradient"
         />

         <img
            src="assets/images/shapes/element-moon3.png"
            alt=""
            class="element one"
         />
         <img
            src="assets/images/shapes/element-moon1.png"
            alt=""
            class="element three"
         />

         <div class="container container-two">
            <div class="breadcrumb-three-content border-bottom border-color">
               <div class="breadcrumb-three-content__inner">
                  <div class="breadcrumb-three-content__left">
                     <div class="flx-between align-items-end gap-3">
                        <div class="author-profile d-flex gap-2 flex-column">
                           <div class="author-profile__thumb flex-shrink-0">
                              <img
                                 src="assets/images/thumbs/author-profile.png"
                                 alt=""
                              />
                           </div>
                           <div class="author-profile__info">
                              <h5 class="author-profile__name mb-2">
                                 Oviousdev
                              </h5>
                              <span class="author-profile__membership font-14">
                                 Member Since January 2021
                              </span>
                           </div>
                        </div>
                        <div class="breadcrumb-three-content__right flex-shrink-0  d-flex align-items-center gap-4 gap-lg-5">
                           <div class="author-rating">
                              <span class="author-rating__text text-heading fw-500 mb-2">
                                 Author Rating
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
                                    {" "}
                                    (116 ratings)
                                 </span>
                              </div>
                           </div>
                           <div class="sales">
                              <span class="sales__text mb-1 text-heading fw-500">
                                 Sales
                              </span>
                              <h5 class="sales__amount mb-0">15,830</h5>
                           </div>
                        </div>
                     </div>

                     <ul class="badge-list mt-32 flx-align gap-2 ms-0">
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
                  </div>
               </div>
               <ul
                  class="nav tab-bordered tab-pills mt-4"
                  id="pills-tabbs"
                  role="tablist">
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link active"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="true">
                        Profile
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-portfolio-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-portfolio"
                        type="button"
                        role="tab"
                        aria-controls="pills-portfolio"
                        aria-selected="false">
                        Templates
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-Settingss-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-Settingss"
                        type="button"
                        role="tab"
                        aria-controls="pills-Settingss"
                        aria-selected="false">
                        Settings{" "}
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-earning-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-earning"
                        type="button"
                        role="tab"
                        aria-controls="pills-earning"
                        aria-selected="false">
                        Earning{" "}
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-statement-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-statement"
                        type="button"
                        role="tab"
                        aria-controls="pills-statement"
                        aria-selected="false">
                        Statement{" "}
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-review-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-review"
                        type="button"
                        role="tab"
                        aria-controls="pills-review"
                        aria-selected="false">
                        Review{" "}
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="tab-link"
                        id="pills-download-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-download"
                        type="button"
                        role="tab"
                        aria-controls="pills-download"
                        aria-selected="false">
                        Download{" "}
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
}
