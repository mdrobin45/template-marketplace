"use client";
import Image from "next/image";
import { useState } from "react";
import { getPopularCategory } from "utils/dataFetch";

export default function PopularCategories() {
   const [categories, setCategories] = useState([]);

   getPopularCategory().then((data) => setCategories(data));
   return (
      <section class="popular padding-y-120 overflow-hidden">
         <div class="container container-two">
            <div class="section-heading style-left mb-64">
               <h5 class="section-heading__title">Popular Categories</h5>
            </div>
            <div class="popular-slider arrow-style-two row gy-4">
               {categories.map((category, index) => (
                  <div key={index} class="col-lg-2">
                     <a href="all-product.html" class="popular-item w-100">
                        <span class="popular-item__icon">
                           <Image
                              height={40}
                              width={40}
                              src={category.image}
                              alt=""
                           />
                        </span>
                        <h6 class="popular-item__title font-18">
                           {category.title}
                        </h6>
                        <span class="popular-item__qty text-body">
                           {category.totalCount}
                        </span>
                     </a>
                  </div>
               ))}
            </div>
            <div class="popular__button text-center">
               <a
                  href="all-product.html"
                  class="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">
                  Explore More
               </a>
            </div>
         </div>
      </section>
   );
}
