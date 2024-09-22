"use client";
import breadcrumbBG from "@/assets/images/gradients/breadcrumb-gradient-bg.png";
import cartIcon from "@/assets/images/icons/cart-icon.svg";
import checkIcon from "@/assets/images/icons/check-icon.svg";
import { AppContext } from "context";
import Image from "next/image";
import { useContext } from "react";

export default function ProductDetailsTopArea() {
   const { templateData } = useContext(AppContext);

   return (
      <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
         <div className="breadcrumb-two">
            <Image
               style={{ width: "auto", height: "auto" }}
               src={breadcrumbBG}
               alt=""
               className="bg--gradient"
            />
            <div className="container container-two">
               <div className="row justify-content-center">
                  <div className="col-lg-12">
                     <div className="breadcrumb-two-content">
                        <ul className="breadcrumb-list flx-align gap-2 mb-2">
                           <li className="breadcrumb-list__item font-14 text-body">
                              <a
                                 href="index.html"
                                 className="breadcrumb-list__link text-body hover-text-main">
                                 Home
                              </a>
                           </li>
                           <li className="breadcrumb-list__item font-14 text-body">
                              <span className="breadcrumb-list__icon font-10">
                                 <i className="fas fa-chevron-right"></i>
                              </span>
                           </li>
                           <li className="breadcrumb-list__item font-14 text-body">
                              <a
                                 href="all-product.html"
                                 className="breadcrumb-list__link text-body hover-text-main">
                                 Products
                              </a>
                           </li>
                           <li className="breadcrumb-list__item font-14 text-body">
                              <span className="breadcrumb-list__icon font-10">
                                 <i className="fas fa-chevron-right"></i>
                              </span>
                           </li>
                           <li className="breadcrumb-list__item font-14 text-body">
                              <span className="breadcrumb-list__text">
                                 {templateData?.name}
                              </span>
                           </li>
                        </ul>

                        <h3 className="breadcrumb-two-content__title mb-3 text-capitalize">
                           {templateData?.name}
                        </h3>

                        <div className="breadcrumb-content flx-align gap-3">
                           <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                              <span className="text">
                                 By{" "}
                                 <a href="#" className="link text-main fw-600">
                                    {templateData?.author?.name}
                                 </a>
                              </span>
                           </div>
                           <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                              <span className="icon">
                                 <Image
                                    style={{ width: "auto", height: "auto" }}
                                    src={cartIcon}
                                    alt=""
                                    className="white-version"
                                 />
                              </span>
                              <span className="text">
                                 {templateData?.totalSales} sales
                              </span>
                           </div>
                           <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                              <span className="icon">
                                 <Image
                                    style={{ width: "auto", height: "auto" }}
                                    src={checkIcon}
                                    alt=""
                                    className="white-version"
                                 />
                              </span>
                              <span className="text">Recently Updated</span>
                           </div>
                           <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                              <span className="icon">
                                 <Image
                                    style={{ width: "auto", height: "auto" }}
                                    src={checkIcon}
                                    alt=""
                                    className="white-version"
                                 />
                              </span>
                              <span className="text">Well Documented</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container container-two">
            <div className="breadcrumb-tab flx-wrap align-items-start gap-lg-4 gap-2">
               <ul
                  className="nav tab-bordered nav-pills tab-pills"
                  id="pills-tab"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link active"
                        id="pills-product-details-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-product-details"
                        type="button"
                        role="tab"
                        aria-controls="pills-product-details"
                        aria-selected="true">
                        Product Details
                     </button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
                        id="pills-rating-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-rating"
                        type="button"
                        role="tab"
                        aria-controls="pills-rating"
                        aria-selected="false">
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
                              {" "}
                              5.0
                           </span>
                           <span className="star-rating__text text-body">
                              {" "}
                              (180)
                           </span>
                        </span>
                     </button>
                  </li>
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
                        id="pills-comments-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-comments"
                        type="button"
                        role="tab"
                        aria-controls="pills-comments"
                        aria-selected="false">
                        Comments (50)
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
}
