import gradientBg from "@/assets/images/gradients/product-gradient.png";
import element2 from "@/assets/images/shapes/element2.png";
import Image from "next/image";

export default function NewArrival() {
   return (
      <section class="arrival-product padding-y-120 section-bg position-relative z-index-1">
         <Image
            width={500}
            height={500}
            src={gradientBg}
            alt=""
            class="bg--gradient white-version"
         />

         <Image
            width={50}
            height={50}
            src={element2}
            alt=""
            class="element one"
         />

         <div class="container container-two">
            <div class="section-heading">
               <h3 class="section-heading__title">New Arrival Products</h3>
            </div>

            <ul
               class="nav common-tab justify-content-center nav-pills mb-48"
               id="pills-tab"
               role="tablist">
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link active"
                     id="pills-all-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-all"
                     type="button"
                     role="tab"
                     aria-controls="pills-all"
                     aria-selected="true">
                     All Item
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-wordPress-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-wordPress"
                     type="button"
                     role="tab"
                     aria-controls="pills-wordPress"
                     aria-selected="false">
                     wordPress
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-php-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-php"
                     type="button"
                     role="tab"
                     aria-controls="pills-php"
                     aria-selected="false">
                     php
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-siteTemplate-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-siteTemplate"
                     type="button"
                     role="tab"
                     aria-controls="pills-siteTemplate"
                     aria-selected="false">
                     site Template
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-blogging-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-blogging"
                     type="button"
                     role="tab"
                     aria-controls="pills-blogging"
                     aria-selected="false">
                     blogging
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-marketing-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-marketing"
                     type="button"
                     role="tab"
                     aria-controls="pills-marketing"
                     aria-selected="false">
                     marketing
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-plugins-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-plugins"
                     type="button"
                     role="tab"
                     aria-controls="pills-plugins"
                     aria-selected="false">
                     plugins
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-uiTemplate-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-uiTemplate"
                     type="button"
                     role="tab"
                     aria-controls="pills-uiTemplate"
                     aria-selected="false">
                     UI Template
                  </button>
               </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
               <div
                  class="tab-pane fade show active"
                  id="pills-all"
                  role="tabpanel"
                  aria-labelledby="pills-all-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-wordPress"
                  role="tabpanel"
                  aria-labelledby="pills-wordPress-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-php"
                  role="tabpanel"
                  aria-labelledby="pills-php-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-siteTemplate"
                  role="tabpanel"
                  aria-labelledby="pills-siteTemplate-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-blogging"
                  role="tabpanel"
                  aria-labelledby="pills-blogging-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-marketing"
                  role="tabpanel"
                  aria-labelledby="pills-marketing-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-plugins"
                  role="tabpanel"
                  aria-labelledby="pills-plugins-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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
               <div
                  class="tab-pane fade"
                  id="pills-uiTemplate"
                  role="tabpanel"
                  aria-labelledby="pills-uiTemplate-tab"
                  tabindex="0">
                  <div class="row gy-4">
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img1.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $120
                                    </h6>
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img2.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $236
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       100 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img3.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       900 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img4.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $59
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1225 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img5.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $99
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $129
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       1300 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img6.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $256
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       200 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img7.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $129
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $259
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       500 Sales
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
                     <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="product-card">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img8.png"
                                    alt=""
                                    class="cover-img"
                                 />
                              </a>
                              <button
                                 type="button"
                                 class="product-card__wishlist">
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
                                    <h6 class="product-card__price mb-0">
                                       $79
                                    </h6>
                                    <span class="product-card__prevPrice text-decoration-line-through">
                                       $99
                                    </span>
                                 </div>
                              </div>
                              <div class="product-card__bottom flx-between gap-2">
                                 <div>
                                    <span class="product-card__sales font-14 mb-2">
                                       2100 Sales
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

            <div class="text-center mt-64">
               <a
                  href="all-product.html"
                  class="btn btn-main btn-lg pill fw-300">
                  View All Products
               </a>
            </div>
         </div>
      </section>
   );
}
