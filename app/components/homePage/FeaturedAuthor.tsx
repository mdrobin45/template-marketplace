"use client";

import sectionBg from "@/assets/images/gradients/featured-gradient.png";
import sectionElement1 from "@/assets/images/shapes/element1.png";
import shape2 from "@/assets/images/shapes/pattern-curve-three.png";
import shape1 from "@/assets/images/shapes/spider-net.png";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "components/common/ProductCard";
import Image from "next/image";
import { useEffect } from "react";
import { getFeaturedAuthor } from "utils/api";

export default function FeaturedAuthor() {
   useEffect(() => {
      const text = document.querySelector(".circle__text");

      if (text) {
         text.innerHTML = text.innerText
            .split("")
            .map(
               (char, i) =>
                  `<span style="transform:rotate(${
                     i * 11.5
                  }deg)">${char}</span>`
            )
            .join("");
      }

      // Text Two
      const textTwo = document.querySelector(".circle__desc");

      if (textTwo) {
         textTwo.innerHTML = textTwo.innerText
            .split("")
            .map(
               (char, i) =>
                  `<span style="transform:rotate(${
                     i * 11.5
                  }deg)">${char}</span>`
            )
            .join("");
      }
   }, []);

   // Fetch featured author
   const { data, isPending } = useQuery({
      queryKey: ["featuredAuthor"],
      queryFn: () => getFeaturedAuthor(),
   });
   return (
      <>
         <section className="top-author padding-y-120 section-bg position-relative z-index-1">
            <Image
               width={300}
               height={300}
               src={sectionBg}
               alt=""
               className="bg--gradient white-version"
            />
            <Image
               width={50}
               height={50}
               src={shape1}
               alt=""
               className="spider-net position-absolute top-0 start-0 z-index--1 white-version"
            />
            <Image
               width={50}
               height={50}
               src={shape2}
               alt=""
               className="position-absolute top-0 end-0 z-index--1"
            />

            <Image
               width={50}
               height={50}
               src={sectionElement1}
               alt=""
               className="element two"
            />

            <div className="container container-two">
               <div className="row gy-4 align-items-center">
                  <div className="col-xl-5">
                     <div className="section-content">
                        <div className="section-heading style-left">
                           <h3 className="section-heading__title">
                              Top Featured Author
                           </h3>
                           <p className="section-heading__desc font-18 w-sm">
                              Every month we pick some best products for you.
                              This months best web themes & templates have
                              arrived, chosen by our content specialists.
                           </p>
                        </div>
                        <div className="author-info d-flex align-items-center gap-3">
                           <div className="author-info__thumb">
                              <Image
                                 width={50}
                                 height={50}
                                 src={data?.avatar}
                                 alt=""
                              />
                           </div>
                           <div className="author-info__content">
                              <h4 className="author-info__name mb-1">
                                 {data?.firstName + " " + data?.lastName}
                              </h4>
                              <span className="author-info__text">
                                 Member Since {data?.createdAt}
                              </span>
                           </div>
                        </div>
                        <div className="flx-align gap-2 mt-48">
                           <a
                              href="profile.html"
                              className="btn btn-main btn-lg pill fw-300">
                              View Profile
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="circle-content position-relative">
                        <div className="circle static-circle">
                           <div className="circle__badge">
                              <Image
                                 width={30}
                                 height={30}
                                 src="/icons/featured-badge.png"
                                 alt=""
                              />
                           </div>
                           <div className="circle__text">
                              <p>DPmarketer Top Featured Author</p>
                           </div>
                        </div>
                        <div className="row gy-4 card-wrapper">
                           {!isPending ? (
                              data.templates?.map((product) => (
                                 <div key={product?._id} className="col-sm-6">
                                    <ProductCard
                                       extraClass="box-shadow"
                                       product={product}
                                    />
                                 </div>
                              ))
                           ) : (
                              <h2>Loading</h2>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
