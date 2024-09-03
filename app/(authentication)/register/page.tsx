"use client";
import registerVector from "@/assets/images/thumbs/sign-up-vector.jpg";
import InputField from "components/common/InputField";
import GithubAuth from "components/common/socialAuth/GithubAuth";
import GoogleAuth from "components/common/socialAuth/GoogleAuth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { credUserRegister } from "utils/api";

export default function Register() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
   });

   const handleFormSubmit = async (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      const signUpRes = await credUserRegister({ name, email, password });
      console.log(signUpRes.status);
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
               <form onSubmit={handleFormSubmit}>
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
                  <button
                     type="submit"
                     className="btn btn-main btn-lg w-100 pill">
                     {" "}
                     Sign up
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
               <GoogleAuth />
               <GithubAuth />
            </div>
         </div>
      </section>
   );
}
