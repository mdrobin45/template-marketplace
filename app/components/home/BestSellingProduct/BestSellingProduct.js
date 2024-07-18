import sectionBg from "@/assets/images/gradients/selling-gradient.png";
import sectionPattern1 from "@/assets/images/shapes/curve-pattern1.png";
import sectionPattern2 from "@/assets/images/shapes/curve-pattern2.png";
import sectionElement1 from "@/assets/images/shapes/element1.png";
import sectionElement2 from "@/assets/images/shapes/element2.png";
import Image from "next/image";
import BestSellingSlider from "./BestSellingSlider";

export default function BestSellingProduct() {
   return (
      <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
         <Image
            width={200}
            height={200}
            src={sectionBg}
            alt=""
            className="bg--gradient"
         />

         <Image
            width={50}
            height={50}
            src={sectionElement2}
            alt=""
            className="element one"
         />
         <Image
            width={50}
            height={50}
            src={sectionElement1}
            alt=""
            className="element two"
         />

         <Image
            width={50}
            height={50}
            src={sectionPattern1}
            alt=""
            className="position-absolute start-0 top-0 z-index--1"
         />
         <Image
            width={50}
            height={50}
            src={sectionPattern2}
            alt=""
            className="position-absolute end-0 top-0 z-index--1"
         />

         <div className="container container-two">
            <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
               <div>
                  <h3 className="section-heading__title">
                     Weekly Best selling Products
                  </h3>
                  <p className="section-heading__desc font-18">
                     Every month we pick some best products for you. This months
                     best web themes &amp; templates have arrived, chosen by our
                     content specialists.
                  </p>
               </div>
               <a
                  href="all-product.html"
                  className="btn btn-main btn-lg pill fw-300">
                  View All Items
               </a>
            </div>
            <BestSellingSlider />
         </div>
      </section>
   );
}
