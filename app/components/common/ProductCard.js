import Image from "next/image";

export default function ProductCard({ product, extraClass }) {
   return (
      <div className={`product-card ${extraClass && extraClass}`}>
         <div className="product-card__thumb d-flex">
            <a href="product-details.html" className="link w-100">
               <Image
                  width={290}
                  height={160}
                  src={product?.thumbnail}
                  alt="Thumbnail"
                  className="cover-img"
               />
            </a>
            <button type="button" className="product-card__wishlist">
               <i class="fa-solid fa-heart text-danger"></i>
            </button>
         </div>
         <div className="product-card__content">
            <h6 className="product-card__title">
               <a href="product-details.html" className="link">
                  {product?.title}
               </a>
            </h6>
            <div className="product-card__info flx-between gap-2">
               <span className="product-card__author">
                  by{" "}
                  <a
                     href="profile.html"
                     className="link hover-text-decoration-underline">
                     {product?.category}
                  </a>
               </span>
               <div className="flx-align gap-2">
                  <h6 className="product-card__price mb-0 fw-800">
                     {product?.salePrice}
                  </h6>
                  <span className="product-card__prevPrice text-decoration-line-through">
                     {product?.regularPrice}
                  </span>
               </div>
            </div>
            <div className="product-card__bottom flx-between gap-2">
               <div>
                  <span className="product-card__sales font-14 mb-2">
                     {product?.totalSales} Sales
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
                        ({product?.ratingCount})
                     </span>
                  </div>
               </div>
               <a
                  href={product?.liveURL}
                  className="btn btn-outline-light btn-sm pill">
                  Live Demo
               </a>
            </div>
         </div>
      </div>
   );
}
