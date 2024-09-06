"use client";
import InputField from "components/common/InputField";
import useLogin from "hooks/useLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
   const router = useRouter();
   const handleLoginFormSubmit = useLogin();

   return (
      <form onSubmit={(e) => handleLoginFormSubmit(e, router)}>
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
         <button type="submit" className="btn btn-main btn-lg w-100 pill">
            {" "}
            Sign In
         </button>
      </form>
   );
}
