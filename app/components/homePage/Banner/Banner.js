import BannerGradient from "@/assets/images/gradients/banner-gradient.png";
import ElementMoon1 from "@/assets/images/shapes/element-moon1.png";
import ElementMoon2 from "@/assets/images/shapes/element-moon2.png";
import Image from "next/image";
import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

export default function Banner() {
   return (
      <section className="banner section-bg z-index-1">
         <Image
            width={100}
            height={100}
            src={BannerGradient}
            alt=""
            className="bg--gradient white-version"
         />
         <Image
            width={100}
            height={100}
            src={ElementMoon1}
            alt=""
            className="element one"
         />
         <Image
            width={100}
            height={100}
            src={ElementMoon2}
            alt=""
            className="element two"
         />

         <div className="container container-two">
            <div className="row align-items-center gy-sm-5 gy-4">
               <BannerLeft />
               <BannerRight />
            </div>
         </div>
      </section>
   );
}
