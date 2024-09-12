import userIcon from "@/assets/images/icons/user.svg";
import authConfig from "auth.config";
import NextAuth from "next-auth";
import Image from "next/image";
import Button from "../Button";
import UserProfile from "./LoggedInUserInfo/UserProfile";

const { auth } = NextAuth(authConfig);
export default async function ButtonGroup() {
   const authSession = await auth();

   return (
      <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
         {authSession?.user ? (
            <UserProfile authSession={authSession} />
         ) : (
            <Button label="Create Account" url="/register" size="small">
               <Image width={20} height={20} src={userIcon} alt="" />{" "}
            </Button>
         )}
      </div>
   );
}
