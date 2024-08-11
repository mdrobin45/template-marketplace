import bannerBg from "@/assets/images/gradients/breadcrumb-gradient-bg.png";
import cartIconWhite from "@/assets/images/icons/process-white1.svg";
import mailIconWhite from "@/assets/images/icons/process-white2.svg";
import paymentIcon from "@/assets/images/icons/process-white3.svg";
import orderIcon from "@/assets/images/icons/process-white4.svg";
import mailIcon from "@/assets/images/icons/process2.svg";
import paymentIconWhite from "@/assets/images/icons/process3.svg";
import orderIconWhite from "@/assets/images/icons/process4.svg";
import shape2 from "@/assets/images/shapes/element-moon1.png";
import shape1 from "@/assets/images/shapes/element-moon3.png";
import Image from "next/image";
import "../../style.css";
import Process from "./Process";

interface BannerPropsType{
   cartActive?:boolean,
   mailActive?:boolean,
   paymentActive?:boolean,
   orderActive?:boolean,
}
export default function CheckoutBanner({
   cartActive,
   mailActive,
   paymentActive,
   orderActive,
}:BannerPropsType) {
   return (
      <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
         <Image
            src={bannerBg}
            alt=""
            className="bg--gradient"
            width={300}
            height={300}
         />

         <Image
            src={shape1}
            alt=""
            className="element one"
            width={90}
            height={90}
         />
         <Image
            src={shape2}
            alt=""
            className="element three"
            width={90}
            height={90}
         />

         <div className="container container-two">
            <div className="row justify-content-center">
               <div className="col-lg-12">
                  <div className="breadcrumb-four-content">
                     <h3 className="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                        Shopping Cart
                     </h3>
                     {/* <Breadcrumb breadcrumbs={["Home"]} /> */}

                     <ul className="process-list">
                        <Process
                           url="/cart"
                           whiteIcon={cartIconWhite}
                           activeClass="activePage"
                           title="Shopping Cart"
                        />
                        <Process
                           url="/checkout"
                           colorIcon={mailIcon}
                           whiteIcon={mailIconWhite}
                           activeClass={mailActive && "activePage"}
                           title="Mailing Address"
                        />
                        <Process
                           url="/checkout/payment"
                           colorIcon={paymentIcon}
                           whiteIcon={paymentIconWhite}
                           activeClass={paymentActive && "activePage"}
                           title="Payment Methods"
                        />
                        <Process
                           url="/checkout/thank-you"
                           colorIcon={orderIcon}
                           whiteIcon={orderIconWhite}
                           activeClass={orderActive && "activePage"}
                           title="Order Review"
                        />
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
