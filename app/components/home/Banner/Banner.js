import BannerLeft from "./BannerLeft/BannerLeft";
import BannerRight from "./BannerRight/BannerRight";

export default function Banner() {
   return (
      <section className="banner section-bg z-index-1">
         <img
            src="./assets/images/gradients/banner-gradient.png"
            alt=""
            className="bg--gradient white-version"
         />
         <img
            src="./assets/images/shapes/element-moon1.png"
            alt=""
            className="element one"
         />
         <img
            src="./assets/images/shapes/element-moon2.png"
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
