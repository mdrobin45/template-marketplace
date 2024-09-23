"use client";
import { useQuery } from "@tanstack/react-query";
import InputField from "components/common/InputField";
import useRegister from "hooks/useRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usernameVerifier } from "utils/api";
import loaderAnimation from "@/assets/images/icons/loaderAnimation.svg";

export default function SignUpForm() {
   const router = useRouter();
   const handleSignUpFormSubmit = useRegister();
   const [username, setUsername] = useState("");

   const handleUsernameChange = (e: any) => {
      const username = e.target.value;
      setUsername(e.target.value);
   };

   const {data,isLoading} = useQuery({
      queryKey:["usernameVerifier",username],
      queryFn:()=>usernameVerifier(username)
   });
   return (
      <form onSubmit={(e) => handleSignUpFormSubmit(e, router)}>
         <div className="d-flex flex-column gap-3">
         <InputField
            name="name"
            placeholder="Enter your name"
            required={true}
            id="name"
            type="text"
            label="Full Name"
         />
         <div>
            <InputField
            name="username"
            value={username}
            onChange={(e: any) => handleUsernameChange(e)}
            placeholder="Username"
            required={true}
            id="username"
            type="text"
            label="Username"
         />
         
         
         {isLoading && <span style={{paddingTop:"3px"}}><img src={loaderAnimation.src} alt="loader" /> Checking</span>}
         {data && username.length !==0 && <p style={{paddingTop:"3px"}} className={data?.status===409?'text-danger':'text-success'}>{data.data.message}</p>} 
         </div>
         
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
         </div>
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
   );
}
