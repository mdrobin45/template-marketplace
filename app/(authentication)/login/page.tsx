import googleIcon from "@/assets/images/icons/google.svg";
import loginVector from "@/assets/images/thumbs/login-vector.jpg";
import { googleSignIn } from "actions";
import InputField from "components/common/InputField";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
   return (
      <section className="account d-flex">
         <div className="account__left d-md-flex d-none flx-align position-relative z-index-1 overflow-hidden">
            <Image
               width={900}
               height={900}
               src={loginVector}
               alt="Register Vector"
            />
         </div>
         <div className="account__right padding-t-120 flx-align">
            <div className="account-content">
               <h4 className="account-content__title fw-bold text-capitalize">
                  Sign In
               </h4>
               <p className="mb-3">Welcome back! please enter your details</p>
               <form action={googleSignIn}>
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
                  <div className="col-12">
                     <div className="flx-between gap-1 mb-3">
                        <div className="common-check my-2">
                           <InputField
                              name="rememberme"
                              id="rememberme"
                              type="checkbox"
                              label="Keep me signed in"
                           />
                        </div>
                        <Link
                           href="/restore-password"
                           className="forgot-password text-decoration-underline text-main text-poppins font-14">
                           Forgot password?
                        </Link>
                     </div>
                  </div>
                  <button
                     type="submit"
                     className="btn btn-main btn-lg w-100 pill">
                     {" "}
                     Sign In
                  </button>
                  <button
                     name="googleSignInBtn"
                     value="google"
                     type="submit"
                     className="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
                     <span className="icon icon-left">
                        <Image width={25} height={25} src={googleIcon} alt="" />
                     </span>
                     Sign In With Google
                  </button>
                  <button
                     name="githubSignInBtn"
                     value="githubSignIn"
                     type="submit"
                     className="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
                     <span className="icon icon-left">
                        <Image width={25} height={25} src={googleIcon} alt="" />
                     </span>
                     Sign In With GitHub
                  </button>
               </form>
               <div className="col-sm-12 mb-0 mt-3">
                  <div className="have-account">
                     <p className="text font-14">
                        New to the market?{" "}
                        <Link
                           className="link text-main text-decoration-underline fw-500"
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
