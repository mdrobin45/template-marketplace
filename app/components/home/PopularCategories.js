"use client";
import Image from "next/image";
import { useState } from "react";
import { getPopularCategory } from "utils/dataFetch";

export default function PopularCategories() {
   const [categories, setCategories] = useState([]);

   getPopularCategory().then((data) => setCategories(data));
   return (
      <section className="popular padding-y-120 overflow-hidden">
         <div className="container container-two">
            <div className="section-heading style-left mb-64">
               <h5 className="section-heading__title">Popular Categories</h5>
            </div>
            <div className="popular-slider arrow-style-two row gy-4">
               {categories.map((category, index) => (
                  <div key={index} className="col-lg-2">
                     <a href="all-product.html" className="popular-item w-100">
                        <span className="popular-item__icon">
                           <Image
                              height={40}
                              width={40}
                              src={category.image}
                              alt=""
                           />
                        </span>
                        <h6 className="popular-item__title font-18">
                           {category.title}
                        </h6>
                        <span className="popular-item__qty text-body">
                           {category.totalCount}
                        </span>
                     </a>
                  </div>
               ))}
            </div>
            <div className="popular__button text-center">
               <a
                  href="all-product.html"
                  className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">
                  Explore More
               </a>
            </div>
         </div>
      </section>
   );
}
