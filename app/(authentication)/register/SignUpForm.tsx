import InputField from "components/common/InputField";
import useRegister from "hooks/useRegister";
import Link from "next/link";

export default function SignUpForm() {
   const handleFormSubmit = useRegister();
   return (
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
