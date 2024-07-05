import sectionBg from "@/assets/images/gradients/featured-gradient.png";
import SectionElement from "@/assets/images/shapes/element1.png";
import sectionShape2 from "@/assets/images/shapes/spider-net-white.png";
import sectionShape from "@/assets/images/shapes/spider-net.png";
import Image from "next/image";

export default function FeaturedProduct() {
   return (
      <section class="featured-product padding-y-120 position-relative z-index-1">
         <Image
            width={500}
            height={500}
            src={sectionBg}
            alt=""
            class="bg--gradient white-version"
         />
         <Image
            width={50}
            height={50}
            src={sectionShape}
            alt=""
            class="spider-net position-absolute top-0 end-0 z-index--1 white-version"
         />
         <Image
            width={50}
            height={50}
            src={sectionShape2}
            alt=""
            class="spider-net position-absolute top-0 end-0 z-index--1 dark-version"
         />

         <Image
            width={50}
            height={50}
            src={SectionElement}
            alt=""
            class="element two"
         />

         <div class="container container-two">
            <div class="row gy-4 flex-wrap-reverse align-items-center">
               <div class="col-xl-6">
                  <div class="row gy-4 card-wrapper">
                     <div class="col-sm-6">
                        <div class="product-card box-shadow">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img9.png"
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
                     <div class="col-sm-6">
                        <div class="product-card box-shadow">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img10.png"
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
                     <div class="col-sm-6">
                        <div class="product-card box-shadow">
                           <div class="product-card__thumb d-flex">
                              <a href="product-details.html" class="link w-100">
                                 <img
                                    src="assets/images/thumbs/product-img11.png"
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
                     <div class="col-sm-6">
                        <div class="product-card box-shadow">
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
                  </div>
               </div>
               <div class="col-xl-1 d-xl-block d-none"></div>
               <div class="col-xl-5">
                  <div class="section-content">
                     <div class="section-heading style-left">
                        <h3 class="section-heading__title">
                           Featured Products
                        </h3>
                        <p class="section-heading__desc font-18 w-sm">
                           Every month we pick some best products for you. This
                           months best web themes & templates have arrived,
                           chosen by our content specialists.
                        </p>
                     </div>
                     <a
                        href="all-product.html"
                        class="btn btn-main btn-lg pill fw-300">
                        View All Items
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
