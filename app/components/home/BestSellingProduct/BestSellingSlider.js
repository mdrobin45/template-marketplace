"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BestSellingSlider() {
   return (
      <>
         <div class="selling-product-slider">
            <Swiper
               // install Swiper modules
               modules={[Navigation, Pagination]}
               spaceBetween={50}
               slidesPerView={3}
               navigation
               pagination={{ clickable: true }}>
               <SwiperSlide>
                  <div class="product-card shadow-sm overlay-none">
                     <div class="product-card__thumb d-flex max-h-unset">
                        <a href="product-details.html" class="link w-100">
                           <img
                              src="assets/images/thumbs/product-img12.png"
                              alt=""
                              class="cover-img"
                           />
                        </a>
                     </div>
                     <div class="product-card__content">
                        <h6 class="product-card__title">
                           <a href="product-details.html" class="link">
                              Title here digital products new marketplace theme
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
                              <h6 class="product-card__price mb-0">$56</h6>
                              <span class="product-card__prevPrice text-decoration-line-through">
                                 $65
                              </span>
                           </div>
                        </div>
                        <div class="product-card__bottom flx-between gap-2">
                           <div>
                              <span class="product-card__sales font-16 mb-2">
                                 1230 Sales
                              </span>
                              <ul class="star-rating gap-2">
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                              </ul>
                           </div>
                           <div class="flx-align gap-2">
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
                                 <span class="icon">
                                    <img
                                       src="assets/images/icons/download.svg"
                                       alt=""
                                       class="white-version"
                                    />
                                    <img
                                       src="assets/images/icons/download-white.svg"
                                       alt=""
                                       class="dark-version"
                                    />
                                 </span>
                              </a>
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="product-card shadow-sm overlay-none">
                     <div class="product-card__thumb d-flex max-h-unset">
                        <a href="product-details.html" class="link w-100">
                           <img
                              src="assets/images/thumbs/product-img12.png"
                              alt=""
                              class="cover-img"
                           />
                        </a>
                     </div>
                     <div class="product-card__content">
                        <h6 class="product-card__title">
                           <a href="product-details.html" class="link">
                              Title here digital products new marketplace theme
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
                              <h6 class="product-card__price mb-0">$56</h6>
                              <span class="product-card__prevPrice text-decoration-line-through">
                                 $65
                              </span>
                           </div>
                        </div>
                        <div class="product-card__bottom flx-between gap-2">
                           <div>
                              <span class="product-card__sales font-16 mb-2">
                                 1230 Sales
                              </span>
                              <ul class="star-rating gap-2">
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                              </ul>
                           </div>
                           <div class="flx-align gap-2">
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
                                 <span class="icon">
                                    <img
                                       src="assets/images/icons/download.svg"
                                       alt=""
                                       class="white-version"
                                    />
                                    <img
                                       src="assets/images/icons/download-white.svg"
                                       alt=""
                                       class="dark-version"
                                    />
                                 </span>
                              </a>
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="product-card shadow-sm overlay-none">
                     <div class="product-card__thumb d-flex max-h-unset">
                        <a href="product-details.html" class="link w-100">
                           <img
                              src="assets/images/thumbs/product-img12.png"
                              alt=""
                              class="cover-img"
                           />
                        </a>
                     </div>
                     <div class="product-card__content">
                        <h6 class="product-card__title">
                           <a href="product-details.html" class="link">
                              Title here digital products new marketplace theme
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
                              <h6 class="product-card__price mb-0">$56</h6>
                              <span class="product-card__prevPrice text-decoration-line-through">
                                 $65
                              </span>
                           </div>
                        </div>
                        <div class="product-card__bottom flx-between gap-2">
                           <div>
                              <span class="product-card__sales font-16 mb-2">
                                 1230 Sales
                              </span>
                              <ul class="star-rating gap-2">
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                              </ul>
                           </div>
                           <div class="flx-align gap-2">
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
                                 <span class="icon">
                                    <img
                                       src="assets/images/icons/download.svg"
                                       alt=""
                                       class="white-version"
                                    />
                                    <img
                                       src="assets/images/icons/download-white.svg"
                                       alt=""
                                       class="dark-version"
                                    />
                                 </span>
                              </a>
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="product-card shadow-sm overlay-none">
                     <div class="product-card__thumb d-flex max-h-unset">
                        <a href="product-details.html" class="link w-100">
                           <img
                              src="assets/images/thumbs/product-img12.png"
                              alt=""
                              class="cover-img"
                           />
                        </a>
                     </div>
                     <div class="product-card__content">
                        <h6 class="product-card__title">
                           <a href="product-details.html" class="link">
                              Title here digital products new marketplace theme
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
                              <h6 class="product-card__price mb-0">$56</h6>
                              <span class="product-card__prevPrice text-decoration-line-through">
                                 $65
                              </span>
                           </div>
                        </div>
                        <div class="product-card__bottom flx-between gap-2">
                           <div>
                              <span class="product-card__sales font-16 mb-2">
                                 1230 Sales
                              </span>
                              <ul class="star-rating gap-2">
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                                 <li class="star-rating__item font-16">
                                    <i class="fas fa-star"></i>
                                 </li>
                              </ul>
                           </div>
                           <div class="flx-align gap-2">
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
                                 <span class="icon">
                                    <img
                                       src="assets/images/icons/download.svg"
                                       alt=""
                                       class="white-version"
                                    />
                                    <img
                                       src="assets/images/icons/download-white.svg"
                                       alt=""
                                       class="dark-version"
                                    />
                                 </span>
                              </a>
                              <a
                                 href="product-details.html"
                                 class="btn btn-outline-light pill">
                                 Live Demo
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </>
   );
}
