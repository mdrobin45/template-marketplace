import brand1 from "@/assets/images/thumbs/brand-img1.png";
import brand2 from "@/assets/images/thumbs/brand-img2.png";
import brand3 from "@/assets/images/thumbs/brand-img3.png";
import brand4 from "@/assets/images/thumbs/brand-img4.png";
import Image from "next/image";

const brandLogo = [brand1, brand2, brand3, brand4];
export default function Brand() {
   return (
      <div class="brand">
         <div class="container container">
            <div class="brand-slider">
               <div class="brand-item d-flex align-items-center justify-content-between">
                  {brandLogo.map((logo, index) => (
                     <Image
                        key={index}
                        width={130}
                        height={30}
                        src={logo}
                        alt=""
                        class="white-version"
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
