"use client";
import gradientBg from "@/assets/images/gradients/product-gradient.png";
import element2 from "@/assets/images/shapes/element2.png";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "components/common/ProductCard";
import Image from "next/image";
import { useState } from "react";
import { filterByCategory } from "utils/api";

export default function NewArrival() {
   const [category, setCategory] = useState("all");
   const { data, isPending } = useQuery({
      queryKey: ["filterByCategory", category],
      queryFn: () => filterByCategory(category),
   });
   console.log(data);
   return (
      <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
         <Image
            width={500}
            height={500}
            src={gradientBg}
            alt=""
            className="bg--gradient white-version"
         />

         <Image
            width={50}
            height={50}
            src={element2}
            alt=""
            className="element one"
         />

         <div className="container container-two">
            <div className="section-heading">
               <h3 className="section-heading__title">New Arrival Products</h3>
            </div>

            <ul
               className="nav common-tab justify-content-center nav-pills mb-48"
               id="pills-tab"
               role="tablist">
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("all")}
                     className="nav-link active"
                     id="pills-all-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-all"
                     type="button"
                     role="tab"
                     aria-controls="pills-all"
                     aria-selected="true">
                     All Item
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("wordpress")}
                     className="nav-link"
                     id="pills-wordPress-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-wordPress"
                     type="button"
                     role="tab"
                     aria-controls="pills-wordPress"
                     aria-selected="false">
                     wordPress
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("html")}
                     className="nav-link"
                     id="pills-php-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-php"
                     type="button"
                     role="tab"
                     aria-controls="pills-php"
                     aria-selected="false">
                     HTML
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("javascript")}
                     className="nav-link"
                     id="pills-siteTemplate-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-siteTemplate"
                     type="button"
                     role="tab"
                     aria-controls="pills-siteTemplate"
                     aria-selected="false">
                     javaScript
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("mobile app")}
                     className="nav-link"
                     id="pills-blogging-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-blogging"
                     type="button"
                     role="tab"
                     aria-controls="pills-blogging"
                     aria-selected="false">
                     Mobile App
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("marketing")}
                     className="nav-link"
                     id="pills-marketing-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-marketing"
                     type="button"
                     role="tab"
                     aria-controls="pills-marketing"
                     aria-selected="false">
                     marketing
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("plugins")}
                     className="nav-link"
                     id="pills-plugins-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-plugins"
                     type="button"
                     role="tab"
                     aria-controls="pills-plugins"
                     aria-selected="false">
                     plugins
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button
                     onClick={() => setCategory("ui template")}
                     className="nav-link"
                     id="pills-uiTemplate-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-uiTemplate"
                     type="button"
                     role="tab"
                     aria-controls="pills-uiTemplate"
                     aria-selected="false">
                     UI Template
                  </button>
               </li>
            </ul>
            <div className="tab-content">
               <div className="row gy-4">
                  {!isPending
                     ? data?.map((product) => (
                          <>
                             <div className="col-xl-3 col-lg-4 col-sm-6">
                                <ProductCard product={product} />
                             </div>
                          </>
                       ))
                     : "Loading"}
               </div>
            </div>

            <div className="text-center mt-64">
               <a
                  href="all-product.html"
                  className="btn btn-main btn-lg pill fw-300">
                  View All Products
               </a>
            </div>
         </div>
      </section>
   );
}
