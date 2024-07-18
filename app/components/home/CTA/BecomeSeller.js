import sellerBg from "@/assets/images/shapes/seller-bg.png";
import Image from "next/image";

export default function BecomeSeller() {
   return (
      <div className="col-lg-6">
         <div className="seller-item position-relative z-index-1">
            <Image
               width={100}
               height={100}
               src={sellerBg}
               className="position-absolute start-0 top-0 z-index--1"
               alt=""
            />
            <h3 className="seller-item__title">Earn 75% of the ItemD Price</h3>
            <p className="seller-item__desc fw-500 text-heading">
               Sellers receive 75% of the Itemp Price for items Dsold
               exclusively and 50% for items sold non-exclusively. See detailed
               informationabout the fee structure on Market.
            </p>
            <a
               href="register.html"
               className="btn btn-static-outline-black btn-xl pill fw-600">
               Become a Seller
            </a>
         </div>
      </div>
   );
}
