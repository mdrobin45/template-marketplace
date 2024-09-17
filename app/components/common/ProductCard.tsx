import Image from "next/image";
import Link from "next/link";

interface ProductInfoType {
   thumbnail: string;
   name: string;
   _id: string;
   category: string;
   slug: string;
   salePrice: number;
   regularPrice: number;
   totalSales: number;
   ratingCount: number;
   liveUrl: string;
}
interface ProductCardPropsType {
   product: ProductInfoType;
   extraClass?: string;
}
export default function ProductCard({
   product,
   extraClass,
}: ProductCardPropsType) {
   return (
      <div className={`product-card ${extraClass && extraClass}`}>
         <div className="product-card__thumb d-flex">
            <Link href={`/templates/${product?.slug}`} className="link w-100">
               <Image
                  width={290}
                  height={160}
                  src={product?.thumbnail}
                  alt="Thumbnail"
                  className="cover-img"
               />
            </Link>
            <button type="button" className="product-card__wishlist">
               <i className="fa-solid fa-heart text-danger"></i>
            </button>
         </div>
         <div className="product-card__content">
            <h6 className="product-card__title">
               <Link href={`/templates/${product?.slug}`} className="link">
                  {product?.name}
               </Link>
            </h6>
            <div className="product-card__info flx-between gap-2">
               <span className="product-card__author">
                  by{" "}
                  <a
                     href="profile.html"
                     className="link hover-text-decoration-underline text-primary">
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
               <Link
                  href={product?.liveUrl}
                  className="btn btn-outline-light btn-sm pill">
                  Live Demo
               </Link>
            </div>
         </div>
      </div>
   );
}
