import googleIcon from "@/assets/images/icons/google.svg";
import registerVector from "@/assets/images/thumbs/sign-up-vector.jpg";
import InputField from "components/common/InputField";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
   return (
      <section class="account d-flex">
         <div class="account__left d-md-flex d-none flx-align position-relative z-index-1 overflow-hidden">
            <Image
               width={900}
               height={900}
               src={registerVector}
               alt="Register Vector"
            />
         </div>
         <div class="account__right padding-t-120 flx-align">
            <div class="account-content">
               <h4 class="account-content__title fw-bold text-capitalize">
                  Create A Free Account
               </h4>
               <p className="mb-3">Welcome back! please enter your detail</p>
               <form>
                  <InputField
                     name="name"
                     placeholder="Enter your name"
                     required={true}
                     id="name"
                     type="text"
                     label="Full Name"
                  />
                  <InputField
                     name="email"
                     placeholder="example@mail.com"
                     required={true}
                     id="email"
                     type="email"
                     label="Email"
                  />
                  <InputField
                     name="password"
                     placeholder="6+ characters, 1 Capital letter"
                     required={true}
                     id="password"
                     type="password"
                     label="Password"
                  />
                  <InputField
                     name="term"
                     required={true}
                     id="term"
                     type="checkbox"
                     label="I agree to the terms & conditions"
                  />
                  <button type="submit" class="btn btn-main btn-lg w-100 pill">
                     {" "}
                     Sign up
                  </button>
                  <button
                     type="submit"
                     class="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
                     <span class="icon icon-left">
                        <Image width={25} height={25} src={googleIcon} alt="" />
                     </span>
                     Sign up with google
                  </button>
                  <div class="have-account mt-3">
                     <p class="text font-14">
                        Already a member?{" "}
                        <Link
                           class="link text-main text-decoration-underline  fw-500"
                           href="/login">
                           Sign In
                        </Link>
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
