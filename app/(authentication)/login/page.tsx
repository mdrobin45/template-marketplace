"use client";
import loginVector from "@/assets/images/thumbs/login-vector.jpg";
import { credentialSignIn } from "actions";
import GithubAuth from "components/common/socialAuth/GithubAuth";
import GoogleAuth from "components/common/socialAuth/GoogleAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "./LoginForm";

export default function Login() {
   const [error, setError] = useState("");

   // Handle form submission
   const handleFormSubmit = async (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      try {
         const response = await credentialSignIn({ email, password });
         if (response) {
            alert("Succ");
         }
      } catch (error) {
         console.log(error);
         if (error) {
            setError("Incorrect email or password!");
         }
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
               {error && (
                  <div className="alert alert-danger" role="alert">
                     {error}
                  </div>
               )}

               <h4 className="account-content__title fw-bold text-capitalize">
                  Sign In
               </h4>
               <p className="mb-3">Welcome back! please enter your details</p>
               <LoginForm handleFormSubmit={handleFormSubmit} />
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
