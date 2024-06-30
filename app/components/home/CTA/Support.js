import shape2 from "@/assets/images/shapes/arrow-shape.png";
import shape1 from "@/assets/images/shapes/spider-net.png";
import supportImg from "@/assets/images/thumbs/support-img.png";
import Image from "next/image";

export default function Support() {
   return (
      <div class="col-lg-12">
         <div class="support position-relative z-index-1">
            <Image
               width={50}
               height={50}
               src={shape1}
               alt=""
               class="spider-net position-absolute top-0 end-0 z-index--1"
            />
            <Image
               width={500}
               height={500}
               src={shape2}
               alt=""
               class="arrow-shape"
            />
            <div class="row align-items-center">
               <div class="col-lg-1 d-lg-block d-none"></div>
               <div class="col-lg-3 col-md-4 d-md-block d-none">
                  <div class="support-thumb text-center">
                     <Image width={250} height={350} src={supportImg} alt="" />
                  </div>
               </div>
               <div class="col-lg-3 d-lg-block d-none"></div>
               <div class="col-lg-5 col-md-8">
                  <div class="support-content">
                     <h3 class="support-content__title mb-3">Support 24/7</h3>
                     <p class="support-content__desc">
                        Wanna talk? Send us a message
                     </p>
                     <a
                        href="mailto:infomail@office.com"
                        class="btn btn-static-black btn-lg fw-300 pill">
                        infomail@office.com
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
