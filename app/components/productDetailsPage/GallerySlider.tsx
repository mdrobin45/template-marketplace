"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function GallerySlider() {
   return (
      <div className="product-details__thumb">
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
               <Image
                  width={840}
                  height={540}
                  src="https://i.ibb.co.com/k8p3bPz/thumbnail.png"
                  alt="Screenshot"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  width={840}
                  height={540}
                  src="https://i.ibb.co.com/k8p3bPz/thumbnail.png"
                  alt="Screenshot"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Image
                  width={840}
                  height={540}
                  src="https://i.ibb.co.com/k8p3bPz/thumbnail.png"
                  alt="Screenshot"
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
