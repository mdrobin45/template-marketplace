"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "components/common/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBestSellingProduct } from "utils/api";
import "./style.css";

export default function BestSellingSlider() {
   const { data, isPending } = useQuery({
      queryKey: ["bestSellingProduct"],
      queryFn: () => getBestSellingProduct(),
   });
   return (
      <>
         <div className="selling-product-slider">
            <Swiper
               modules={[Navigation, Pagination]}
               spaceBetween={50}
               slidesPerView={3}
               navigation
               pagination={{ clickable: true }}>
               {!isPending ? (
                  data?.slice(0, 12).map((product) => (
                     <SwiperSlide key={product?.template?._id}>
                        <ProductCard
                           extraClass="shadow-sm overlay-none"
                           product={product?.template}
                        />
                     </SwiperSlide>
                  ))
               ) : (
                  <h2>Loading</h2>
               )}
            </Swiper>
         </div>
      </>
   );
}
