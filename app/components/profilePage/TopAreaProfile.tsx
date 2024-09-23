import moment from "moment";
import Image from "next/image";
import { useSession } from "next-auth/react";
import gradientBg1 from "@/assets/images/gradients/breadcrumb-gradient-bg.png";
import elementMoon3 from "@/assets/images/shapes/element-moon3.png";
import elementOne from "@/assets/images/shapes/element-moon1.png";
import { useEffect, useState } from "react";


export default function TopAreaProfile({ author }: { author: any }) {
   const { data: session } = useSession();

   console.log(session);

   return (
      <section className="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">
         <img
            src={gradientBg1.src}
            alt=""
            className="bg--gradient"
         />

         <img
            src={elementMoon3.src}
            alt=""
            className="element one"
         />
         <img
            src={elementOne.src}
            alt=""
            className="element three"
         />

         <div className="container container-two">
            <div className="breadcrumb-three-content border-bottom border-color">
               <div className="breadcrumb-three-content__inner">
                  <div className="breadcrumb-three-content__left">
                     <div className="flx-between align-items-end gap-3">
                        <div className="author-profile d-flex gap-2 flex-column">
                           <div className="author-profile__thumb flex-shrink-0">
                              <Image
                                 width={120}
                                 height={120}
                                 src={author?.image || 'https://i.ibb.co.com/nmCN10Z/avatar.png'}
                                 alt={author?.name}
                              />
                           </div>
                           <div className="author-profile__info">
                              <h5 className="author-profile__name mb-2">
                                 {author?.name}
                              </h5>
                              <span className="author-profile__membership font-14">
                                 Member Since {moment(author.createdAt).format("ll")}
                              </span>
                           </div>
                        </div>
                        {
                           author?.role === 'seller' && (

                              <div className="breadcrumb-three-content__right flex-shrink-0  d-flex align-items-center gap-4 gap-lg-5">
                                 <div className="author-rating">
                                    <span className="author-rating__text text-heading fw-500 mb-2">
                                       Author Rating
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
                                       <span className="star-rating__text text-body font-14">
                                          {" "}
                                          (116 ratings)
                                       </span>
                                    </div>
                                 </div>
                                 <div className="sales">
                                    <span className="sales__text mb-1 text-heading fw-500">
                                       Sales
                                    </span>
                                    <h5 className="sales__amount mb-0">15,830</h5>
                                 </div>
                              </div>

                           )
                        }
                     </div>
                     <ul className="badge-list mt-32 flx-align gap-2 ms-0">
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
                  </div>
               </div>
               <ul
                  className="nav tab-bordered tab-pills mt-4"
                  id="pills-tabbs"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link active"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
                  <li className="nav-item" role="presentation">
                     <button
                        className="tab-link"
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
