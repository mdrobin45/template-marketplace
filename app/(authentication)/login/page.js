import googleIcon from "@/assets/images/icons/google.svg";
import loginVector from "@/assets/images/thumbs/login-vector.jpg";
import InputField from "components/common/InputField";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
   return (
      <section class="account d-flex">
         <div class="account__left d-md-flex d-none flx-align position-relative z-index-1 overflow-hidden">
            <Image
               width={900}
               height={900}
               src={loginVector}
               alt="Register Vector"
            />
         </div>
         <div class="account__right padding-t-120 flx-align">
            <div class="account-content">
               <h4 class="account-content__title fw-bold text-capitalize">
                  Sign In
               </h4>
               <p className="mb-3">Welcome back! please enter your details</p>
               <form>
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
                     placeholder="Enter your password"
                     required={true}
                     id="password"
                     type="password"
                     label="Password"
                  />
                  <div class="col-12">
                     <div class="flx-between gap-1 mb-3">
                        <div class="common-check my-2">
                           <InputField
                              name="rememberme"
                              id="rememberme"
                              type="checkbox"
                              label="Keep me signed in"
                           />
                        </div>
                        <Link
                           href="/restore-password"
                           class="forgot-password text-decoration-underline text-main text-poppins font-14">
                           Forgot password?
                        </Link>
                     </div>
                  </div>
                  <button type="submit" class="btn btn-main btn-lg w-100 pill">
                     {" "}
                     Sign In
                  </button>
                  <button
                     type="submit"
                     class="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
                     <span class="icon icon-left">
                        <Image width={25} height={25} src={googleIcon} alt="" />
                     </span>
                     Sign up with google
                  </button>
               </form>
               <div class="col-sm-12 mb-0 mt-3">
                  <div class="have-account">
                     <p class="text font-14">
                        New to the market?{" "}
                        <Link
                           class="link text-main text-decoration-underline fw-500"
                           href="/register">
                           Sign Up
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
