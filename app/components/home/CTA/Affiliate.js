import sellerBg from "@/assets/images/shapes/seller-bg-two.png";
import Image from "next/image";

export default function Affiliate() {
   return (
      <div class="col-lg-6">
         <div class="seller-item bg-two position-relative z-index-1">
            <Image
               width={100}
               height={100}
               src={sellerBg}
               class="position-absolute start-0 top-0 z-index--1"
               alt=""
            />
            <h3 class="seller-item__title">Earn until 40% commission</h3>
            <p class="seller-item__desc fw-500 text-heading">
               Our Market is the world’s largest creative market place, selling
               millions of digital assets every year. With 30% affiliate
               commission, earning money has never been easier!
            </p>
            <a
               href="register.html"
               class="btn btn-static-outline-black btn-xl pill fw-600">
               Become an Affiliate
            </a>
         </div>
      </div>
   );
}
