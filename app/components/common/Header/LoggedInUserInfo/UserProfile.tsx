"use client";
import { logout } from "actions";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function UserProfile({ authSession }) {
   const [open, setOpen] = useState(false);
   return (
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
               <h4>{authSession?.user?.name}</h4>
               <p>{authSession?.user?.email}</p>
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
               <li
                  onClick={() => {
                     setOpen(!open);
                  }}>
                  <form action={logout}>
                     <button type="submit">
                        <i className="fa-solid fa-right-to-bracket pe-2"></i>
                        Logout
                     </button>
                  </form>
               </li>
            </ul>
         </div>
      </div>
   );
}
