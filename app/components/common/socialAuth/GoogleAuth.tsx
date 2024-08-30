import googleIcon from "@/assets/images/icons/google.svg";
import { googleSignIn } from "actions";
import Image from "next/image";

export default function GoogleAuth() {
   return (
      <form action={googleSignIn}>
         <button
            name="googleSignInBtn"
            value="google"
            type="submit"
            className="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
            <span className="icon icon-left">
               <Image width={25} height={25} src={googleIcon} alt="" />
            </span>
            Sign In With Google
         </button>
      </form>
   );
}
