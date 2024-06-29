import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

export default function ProductCard({
   thumbnail,
   title,
   category,
   salePrice,
   regularPrice,
   salesCount,
   ratingCount,
   liveURL,
}) {
   return (
      <div class="col-xl-3 col-lg-4 col-sm-6">
         <div class="product-card">
            <div class="product-card__thumb d-flex">
               <a href="product-details.html" class="link w-100">
                  <Image src={thumbnail} alt="Thumbnail" class="cover-img" />
               </a>
               <button type="button" class="product-card__wishlist">
                  <FaHeart className="text-danger" />
               </button>
            </div>
            <div class="product-card__content">
               <h6 class="product-card__title">
                  <a href="product-details.html" class="link">
                     {title}
                  </a>
               </h6>
               <div class="product-card__info flx-between gap-2">
                  <span class="product-card__author">
                     by
                     <a
                        href="profile.html"
                        class="link hover-text-decoration-underline">
                        {category}
                     </a>
                  </span>
                  <div class="flx-align gap-2">
                     <h6 class="product-card__price mb-0">{salePrice}</h6>
                     <span class="product-card__prevPrice text-decoration-line-through">
                        {regularPrice}
                     </span>
                  </div>
               </div>
               <div class="product-card__bottom flx-between gap-2">
                  <div>
                     <span class="product-card__sales font-14 mb-2">
                        {salesCount} Sales
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
                           ({ratingCount})
                        </span>
                     </div>
                  </div>
                  <a href={liveURL} class="btn btn-outline-light btn-sm pill">
                     Live Demo
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
