"use client";
import registerVector from "@/assets/images/thumbs/sign-up-vector.jpg";
import GithubAuth from "components/common/socialAuth/GithubAuth";
import GoogleAuth from "components/common/socialAuth/GoogleAuth";
import Image from "next/image";
import SignUpForm from "./SignUpForm";

export default function Register() {
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
               <SignUpForm />
               <GoogleAuth />
               <GithubAuth />
            </div>
         </div>
      </section>
   );
}
