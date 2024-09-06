"use client";
import registerVector from "@/assets/images/thumbs/sign-up-vector.jpg";
import GithubAuth from "components/common/socialAuth/GithubAuth";
import GoogleAuth from "components/common/socialAuth/GoogleAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { credUserRegister } from "utils/api";
import SignUpForm from "./SignUpForm";

export default function Register() {
   const router = useRouter();
   const handleFormSubmit = async (e: any) => {
      e.preventDefault();

      try {
         const formData = new FormData(e.currentTarget);

         const name = formData.get("name") as string;
         const email = formData.get("email") as string;
         const password = formData.get("password") as string;

         const response = await credUserRegister({ name, email, password });

         if (response.status === 201) {
            toast.success("Registration Successful");
            router.push("/login");
         }
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
               <SignUpForm handleFormSubmit={handleFormSubmit} />
               <GoogleAuth />
               <GithubAuth />
            </div>
         </div>
      </section>
   );
}
