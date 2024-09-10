"use client";
import userIcon from "@/assets/images/icons/user.svg";
import { AppContext } from "context";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useContext, useState } from "react";
import Button from "../Button";

// User dropdown
const dropdownLinks = [
   {
      name: "Profile",
      icon: "fa-user",
      ulr: "/profile",
   },
   {
      name: "Downloads",
      icon: "fa-download",
      ulr: "/my-account/downloads",
   },
];
export default function ButtonGroup() {
   const { authSession } = useContext(AppContext);
   const [open, setOpen] = useState(false);
   const { name, email } = authSession?.user;

   let content: ReactElement;
   if (authSession?.user) {
      content = (
         <div className="loggedinUserWrapper">
            <div onClick={() => setOpen(!open)} className="profile">
               <div className="img-box">
                  <Image
                     width={50}
                     height={50}
                     src={authSession?.user?.image || ""}
                     alt="User Profile"
                  />
               </div>
            </div>
            <div className={`menu ${open && "active"}`}>
               <div className="userDetails">
                  <h4>{name}</h4>
                  <p>{email}</p>
               </div>
               <ul>
                  {dropdownLinks.map((link, index) => (
                     <li onClick={() => setOpen(!open)} key={index}>
                        <Link href={link.ulr}>
                           <i className={`fa-solid pe-2 ${link.icon}`}></i>
                           {link.name}
                        </Link>
                     </li>
                  ))}
                  <li onClick={() => setOpen(!open)}>
                     <button>
                        <i className="fa-solid fa-right-to-bracket pe-2"></i>
                        Logout
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      );
   } else {
      content = (
         <Button label="Create Account" url="/register" size="small">
            <Image width={20} height={20} src={userIcon} alt="" />{" "}
         </Button>
      );
   }

   return (
      <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
         {content}
      </div>
   );
}
