import toast from "react-hot-toast";
import { credUserRegister } from "utils/api";
import useLogin from "./useLogin";

export default function useRegister() {
   const handleLoginFormSubmit = useLogin();

   const handleSignUpFormSubmit = async (e: any) => {
      e.preventDefault();

      try {
         const formData = new FormData(e.currentTarget);

         const name = formData.get("name") as string;
         const email = formData.get("email") as string;
         const password = formData.get("password") as string;

         const response = await credUserRegister({ name, email, password });

         if (response.status === 201) {
            toast.success("Registration Successful");
            handleLoginFormSubmit(e);
         } else if (response.status === 409) {
            toast.error("User already exist");
         }
      } catch {}
   };

   return handleSignUpFormSubmit;
}
