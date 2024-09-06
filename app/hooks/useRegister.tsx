import { credentialSignIn } from "actions";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { credUserRegister } from "utils/api";

export default function useRegister() {
   const handleSignUpFormSubmit = async (
      e: any,
      redirectTo?: AppRouterInstance
   ) => {
      e.preventDefault();

      try {
         const formData = new FormData(e.currentTarget);

         const name = formData.get("name") as string;
         const email = formData.get("email") as string;
         const password = formData.get("password") as string;

         const response = await credUserRegister({ name, email, password });

         if (response.status === 201) {
            toast.success("Registration Successful");
            credentialSignIn({ email, password });
            if (redirectTo) {
               redirectTo.push("/");
            }
         } else if (response.status === 409) {
            toast.error("User already exist");
         }
      } catch {}
   };

   return handleSignUpFormSubmit;
}
