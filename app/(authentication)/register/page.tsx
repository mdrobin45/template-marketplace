"use client";
import googleIcon from "@/assets/images/icons/google.svg";
import registerVector from "@/assets/images/thumbs/sign-up-vector.jpg";
import InputField from "components/common/InputField";
import authUserSignUp from "modules/auth-signup-password";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
   const formSubmission = (e) => {
      e.preventDefault();
      const { email, password } = e.target;
      authUserSignUp(email.value, password.value).then((res) =>
         console.log(res)
      );
   };
   return (
      <section className="account d-flex">
         <div className="account__left d-md-flex d-none flx-align position-relative z-index-1 overflow-hidden">
            <Image
               width={900}
               height={900}
               src={registerVector}
               alt="Register Vector"
            />
         </div>
         <div className="account__right padding-t-120 flx-align">
            <div className="account-content">
               <h4 className="account-content__title fw-bold text-capitalize">
                  Create A Free Account
               </h4>
               <p className="mb-3">Welcome back! please enter your detail</p>
               <form onSubmit={formSubmission}>
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
                  <button type="submit" className="btn btn-main btn-lg w-100 pill">
                     {" "}
                     Sign up
                  </button>
                  <button
                     type="submit"
                     className="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
                     <span className="icon icon-left">
                        <Image width={25} height={25} src={googleIcon} alt="" />
                     </span>
                     Sign up with google
                  </button>
                  <div className="have-account mt-3">
                     <p className="text font-14">
                        Already a member?{" "}
                        <Link
                           className="link text-main text-decoration-underline  fw-500"
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
