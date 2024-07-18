"use client";

import sectionBg from "@/assets/images/gradients/featured-gradient.png";
import SectionElement from "@/assets/images/shapes/element1.png";
import sectionShape2 from "@/assets/images/shapes/spider-net-white.png";
import sectionShape from "@/assets/images/shapes/spider-net.png";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "components/common/ProductCard";
import Image from "next/image";
import { getFeaturedProduct } from "utils/api";

export default function FeaturedProduct() {
   const { data, isPending } = useQuery({
      queryKey: ["featuredProduct"],
      queryFn: () => getFeaturedProduct(),
   });
   return (
      <section className="featured-product padding-y-120 position-relative z-index-1">
         <Image
            width={500}
            height={500}
            src={sectionBg}
            alt=""
            className="bg--gradient white-version"
         />
         <Image
            width={50}
            height={50}
            src={sectionShape}
            alt=""
            className="spider-net position-absolute top-0 end-0 z-index--1 white-version"
         />
         <Image
            width={50}
            height={50}
            src={sectionShape2}
            alt=""
            className="spider-net position-absolute top-0 end-0 z-index--1 dark-version"
         />

         <Image
            width={50}
            height={50}
            src={SectionElement}
            alt=""
            className="element two"
         />

         <div className="container container-two">
            <div className="row gy-4 flex-wrap-reverse align-items-center">
               <div className="col-xl-6">
                  <div className="row gy-4 card-wrapper">
                     {!isPending ? (
                        data?.slice(0, 4).map((product) => (
                           <div
                              key={product?.template._id}
                              className="col-sm-6">
                              <ProductCard
                                 extraClass="box-shadow"
                                 product={product?.template}
                              />
                           </div>
                        ))
                     ) : (
                        <h2>Loading</h2>
                     )}
                  </div>
               </div>
               <div className="col-xl-1 d-xl-block d-none"></div>
               <div className="col-xl-5">
                  <div className="section-content">
                     <div className="section-heading style-left">
                        <h3 className="section-heading__title">
                           Featured Products
                        </h3>
                        <p className="section-heading__desc font-18 w-sm">
                           Every month we pick some best products for you. This
                           months best web themes & templates have arrived,
                           chosen by our content specialists.
                        </p>
                     </div>
                     <a
                        href="all-product.html"
                        className="btn btn-main btn-lg pill fw-300">
                        View All Items
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
