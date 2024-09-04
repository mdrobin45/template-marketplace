"use client";
import loginVector from "@/assets/images/thumbs/login-vector.jpg";
import { credentialSignIn } from "actions";
import InputField from "components/common/InputField";
import GithubAuth from "components/common/socialAuth/GithubAuth";
import GoogleAuth from "components/common/socialAuth/GoogleAuth";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
   // Handle form submission
   const handleFormSubmit = async (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      try {
         const response = await credentialSignIn({ email, password });
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };
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
               <form onSubmit={handleFormSubmit}>
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
               </form>
               <GoogleAuth />
               <GithubAuth />
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
