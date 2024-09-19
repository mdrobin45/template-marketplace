"use client";

import { useQuery } from "@tanstack/react-query";
import { AppContext } from "context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { getAuthorById, getProductBySlug } from "utils/api";
import CheckIcon from "@/assets/images/icons/check-cirlce.svg";
import CartIcon from "@/assets/images/icons/add-to-cart.svg";
import moment from "moment";
interface ProductDetailsSidebarProps {
   id: string;
}

export default function ProductDetailsSidebar({ id }: ProductDetailsSidebarProps) {
   const { templateData, isLoading: productLoading } = useContext(AppContext);

   // Fetch author data
   const { data: author, isLoading } = useQuery({
      queryKey: [`author-${id}`],
      queryFn: () => getAuthorById(id),
   });
   console.log("Author", author);
   console.log("Product Data", templateData);


   if (isLoading || productLoading) {
      return <div>Loading...</div>;
   }

   if (!author || !templateData) {
      return null;
   }
   return (
      <div className="col-lg-4">
         <div className="product-sidebar section-bg">
            <div className="product-sidebar__top position-relative flx-between gap-1">
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

            {/* Author details */}
            <div className="author-details">
               <div className="d-flex align-items-center gap-2">
                  <div className="author-details__thumb flex-shrink-0">
                     <Image
                        src={author?.avatar}
                        alt={author?.firstName}
                        width={100}
                        height={100}
                     />
                  </div>
                  <div className="author-details__content">
                     <h6 className="author-details__name font-18 mb-2">
                        <Link href={`/profile/${author?.name}`} className="link hover-text-main">
                           {author?.firstName} {author?.lastName}
                        </Link>
                     </h6>

                     <span className="d-flex align-items-center gap-1">
                        {/* TODO: Add rating */}
                        <span className="star-rating__text text-body">5.0</span>
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
               <Link
                  href={`/profile/${author?.name}`}
                  className="btn btn-outline-light w-100 pill mt-32">
                  View Portfolio
               </Link>
            </div>

            {/* Meta attributes */}
            <ul className="meta-attribute mt-4">
               <li className="meta-attribute__item">
                  <span className="name">Last Update</span>
                  <span className="details">{moment(templateData?.updatedAt).format("ll")}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Published</span>
                  <span className="details">{moment(templateData?.createdAt).format("ll")}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Category</span>
                  <span className="details">{templateData?.category}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Widget Ready</span>
                  <span className="details">{templateData?.widgetReady ? "Yes" : "No"}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">High Resolution</span>
                  <span className="details">{templateData?.highResolution ? "Yes" : "No"}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Copatible with</span>
                  <div className="details">
                     {templateData?.compatible.map((compatibleWith: string, index: number) => (
                        <span key={index} >
                           {compatibleWith},
                        </span>
                     ))}
                  </div>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">File size</span>
                  <span className="details">85 MB</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Framework</span>
                  <span className="details">Underscores</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Software Version</span>
                  <span>{templateData?.version}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Marketplace Files Included</span>
                  <span className="details">
                     {templateData?.filesIncluded.map((fileIncluded: string, index: number) => (
                        <span key={index} className="hover-text-decoration-underline">
                           {fileIncluded},
                        </span>
                     ))}
                  </span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Layout</span>
                  <span className="details">{templateData?.layout}</span>
               </li>
               <li className="meta-attribute__item">
                  <span className="name">Tags</span>
                  <div className="details">
                     {templateData?.tags.map((tag: string, index: number) => (
                        <span key={index} className="hover-text-decoration-underline">
                           {tag},
                        </span>
                     ))}
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
