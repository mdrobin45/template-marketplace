import { useContext } from "react";
import Image from "next/image";
import { AppContext } from "context";
import CheckIcon from "@/assets/images/icons/check-cirlce.svg";
import CartIcon from "@/assets/images/icons/add-to-cart.svg";


export default function ProductInfo() {
   const { templateData } = useContext(AppContext);

   return (
      <div className="product-sidebar__info">
         <div className="product-sidebar__top position-relative flx-between gap-1">
            {/* Extended License Dropdown */}
            <button
               type="button"
               className="btn-has-dropdown font-heading font-18">
               Extended License
            </button>
            <div className="license-dropdown">
               <div className="license-dropdown__item mb-3">
                  <h6 className="license-dropdown__title font-body mb-1 font-16">
                     Regular License
                  </h6>
                  <p className="license-dropdown__desc font-13">
                     Use, by you or one client, in a solitary finished result
                     which end clients are not charged for. The complete cost
                     incorporates the thing cost and a purchaser expense..
                  </p>
               </div>
               <div className="license-dropdown__item">
                  <h6 className="license-dropdown__title font-body mb-1 font-16">
                     Extended License
                  </h6>
                  <p className="license-dropdown__desc font-13">
                     Use, by you or one client, in a solitary final result
                     which end clients can be charged for. The all out cost
                     incorporates the thing cost and a purchaser expense.
                  </p>
               </div>
               <div className="mt-3 pt-2 border-top text-center">
                  <a
                     href="#"
                     className="link hover-text-decoration-underline font-14 text-main fw-500">
                     View License Details
                  </a>
               </div>
            </div>
            <h6 className="product-sidebar__title">
               ${templateData?.salePrice}
            </h6>
         </div>

         {/* Product Info */}
         <ul className="sidebar-list">
            <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
               <span>
                  <Image width={16} height={17} src={CheckIcon} alt="Check Icon" />
               </span>
               <span className="text">Quality verified</span>
            </li>
            <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
               <span>
                  <Image width={16} height={17} src={CheckIcon} alt="Check Icon" />
               </span>
               <span className="text">Use for a single project</span>
            </li>
            <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
               <span>
                  <Image width={16} height={17} src={CheckIcon} alt="Check Icon" />
               </span>
               <span className="text">Non-paying users only</span>
            </li>
         </ul>

         {/* Extended License */}
         <div className="flx-between mt-3">
            <div className="common-check mb-0">
               <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  id="extended"
               />
               <label
                  className="form-check-label mb-0 fw-300 text-body"
                  htmlFor="extended">
                  Extended support 12 month
               </label>
            </div>
            <div className="flx-align gap-2">
               <span className="product-card__prevPrice text-decoration-line-through">
                  $12
               </span>
               <h6 className="product-card__price mb-0 font-14 fw-500">
                  $7.25
               </h6>
            </div>
         </div>

         {/* Add to cart */}
         <button
            type="button"
            className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
            <Image width={16} height={17} src={CartIcon} alt="Cart Icon" />
            Add To Cart
         </button>
      </div>
   );
}
