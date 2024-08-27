"use client";
import gradientBg from "@/assets/images/gradients/product-gradient.png";
import element2 from "@/assets/images/shapes/element2.png";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "components/common/ProductCard";
import Image from "next/image";
import { useState } from "react";
import { filterByCategory } from "utils/api";

// Tabs
const tabs = [
   {
      title: "All",
      name: "all",
   },
   {
      title: "WordPress",
      name: "wordpress",
   },
   {
      title: "HTML",
      name: "html",
   },
   {
      title: "JavaScript",
      name: "javascript",
   },
];
export default function NewArrival() {
   const [category, setCategory] = useState("all");
   const { data, isPending } = useQuery({
      queryKey: ["filterByCategory", category],
      queryFn: () => filterByCategory(category),
   });
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
               {tabs.map(
                  (tab: { title: string; name: string }, index: number) => (
                     <li key={index} className="nav-item" role="presentation">
                        <button
                           onClick={() => setCategory(tab.name)}
                           className={`nav-link ${
                              category === tab.name && "active"
                           }`}
                           id="pills-all-tab">
                           {tab.title}
                        </button>
                     </li>
                  )
               )}
            </ul>
            <div className="tab-content">
               <div className="row gy-4">
                  {!isPending
                     ? data.length
                        ? data.map((product) => (
                             <>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                   <ProductCard product={product} />
                                </div>
                             </>
                          ))
                        : "No data found"
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
