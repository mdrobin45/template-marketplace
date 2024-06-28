import DotWhite from "@/assets/images/shapes/dots-white.png";
import Dot from "@/assets/images/shapes/dots.png";
import Element2 from "@/assets/images/shapes/element2.png";
import BannerImg from "@/assets/images/thumbs/banner-img.png";
import Image from "next/image";

export default function BannerRight() {
   return (
      <div className="col-lg-6">
         <div className="banner-thumb">
            <Image width={744} height={614} src={BannerImg} alt="" />
            <Image
               width={50}
               height={50}
               src={Dot}
               alt=""
               className="dotted-img white-version"
            />
            <Image
               width={50}
               height={50}
               src={DotWhite}
               alt=""
               className="dotted-img dark-version"
            />
            <Image
               width={50}
               height={50}
               src={Element2}
               alt=""
               className="element two end-0"
            />

            <div className="statistics animation bg-main text-center">
               <h5 className="statistics__amount text-white">50k</h5>
               <span className="statistics__text text-white font-14">
                  Customers
               </span>
            </div>

            <div className="statistics style-two bg-white text-center">
               <h5 className="statistics__amount statistics__amount-two text-heading">
                  22k
               </h5>
               <span className="statistics__text text-heading font-14">
                  Themes & Plugins
               </span>
            </div>
         </div>
      </div>
   );
}
