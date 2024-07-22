import googleIcon from "@/assets/images/icons/google.svg";
import curveBg1 from "@/assets/images/shapes/pattern-curve-six.png";
import accountImage from "@/assets/images/thumbs/account-img.png";
import accountBG from "@/assets/images/thumbs/banner-img.png";
import Image from "next/image";

export default function Register() {
   return (
      <section class="account d-flex">
         <Image
            width={200}
            height={200}
            src={accountImage}
            alt=""
            class="account__img"
         />
         <div class="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
            <Image
               src={curveBg1}
               width={600}
               height={600}
               alt=""
               class="position-absolute end-0 top-0 z-index--1 h-100"
            />
            <div class="account-thumb">
               <Image src={accountBG} width={600} height={600} alt="" />
               <div class="statistics animation bg-main text-center">
                  <h5 class="statistics__amount text-white">50k</h5>
                  <span class="statistics__text text-white font-14">
                     Customers
                  </span>
               </div>
            </div>
         </div>
         <div class="account__right padding-t-120 flx-align">
            <div class="account-content">
               <h4 class="account-content__title fw-bold mb-48 text-capitalize">
                  Create A Free Account
               </h4>

               <form action="#">
                  <div class="row gy-4">
                     <div class="col-12">
                        <label
                           for="name"
                           class="form-label mb-2 font-18 font-heading fw-600">
                           Full Name
                        </label>
                        <div class="position-relative">
                           <input
                              type="text"
                              class="common-input common-input--bg common-input--withIcon"
                              id="name"
                              placeholder="Your full name"
                           />
                        </div>
                     </div>
                     <div class="col-12">
                        <label
                           for="email"
                           class="form-label mb-2 font-18 font-heading fw-600">
                           Email
                        </label>
                        <div class="position-relative">
                           <input
                              type="email"
                              class="common-input common-input--bg common-input--withIcon"
                              id="email"
                              placeholder="infoname@mail.com"
                           />
                        </div>
                     </div>

                     <div class="col-12">
                        <label
                           for="your-password"
                           class="form-label mb-2 font-18 font-heading fw-600">
                           Password
                        </label>
                        <div class="position-relative">
                           <input
                              type="password"
                              class="common-input common-input--bg common-input--withIcon"
                              id="your-password"
                              placeholder="6+ characters, 1 Capital letter"
                           />
                        </div>
                     </div>
                     <div class="col-12">
                        <div class="common-check my-2">
                           <input
                              class="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="agree"
                           />
                           <label
                              class="form-check-label mb-0 fw-400 font-16 text-body"
                              for="agree">
                              I agree to the terms & conditions
                           </label>
                        </div>
                     </div>
                     <div class="col-12">
                        <button
                           type="submit"
                           class="btn btn-main btn-lg w-100 pill">
                           {" "}
                           Create An Account
                        </button>
                     </div>
                     <div class="col-12">
                        <button
                           type="submit"
                           class="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
                           <span class="icon icon-left">
                              <Image
                                 width={25}
                                 height={25}
                                 src={googleIcon}
                                 alt=""
                              />
                           </span>
                           Sign up with google
                        </button>
                     </div>
                     <div class="col-sm-12 mb-0">
                        <div class="have-account">
                           <p class="text font-14">
                              Already a member?{" "}
                              <a
                                 class="link text-main text-decoration-underline  fw-500"
                                 href="login.html">
                                 Login
                              </a>
                           </p>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
