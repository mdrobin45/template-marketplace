import { credentialSignIn } from "actions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export default function useLogin() {
   const handleFormSubmit = async (e: any, redirectTo: AppRouterInstance) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      const responsePromise = credentialSignIn({ email, password });

      try {
         const res = await responsePromise;
         if (res) {
            toast.success("Login Successful");
            redirectTo.push("/");
         }
      } catch {
         toast.error("Incorrect email or password");
      }
   };
   return handleFormSubmit;
}
