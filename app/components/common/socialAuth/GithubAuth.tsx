import githubIcon from "@/assets/images/icons/github.svg";
import { githubSignIn } from "actions";
import Image from "next/image";

export default function GithubAuth() {
   return (
      <form action={githubSignIn}>
         <button
            name="githubSignInBtn"
            value="github"
            type="submit"
            className="btn mt-4 btn-outline-light btn-lg-icon btn-lg w-100 pill">
            <span className="icon icon-left">
               <Image width={25} height={25} src={githubIcon} alt="" />
            </span>
            Sign In With GitHub
         </button>
      </form>
   );
}
