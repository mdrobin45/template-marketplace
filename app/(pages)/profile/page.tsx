"use client";
import Download from "components/profilePage/Download";
import Earnings from "components/profilePage/Earnings";
import ProfileInfo from "components/profilePage/ProfileInfo";
import Reviews from "components/profilePage/Reviews";
import Settings from "components/profilePage/Settings";
import Statement from "components/profilePage/Statement";
import Templates from "components/profilePage/Templates";
import TopAreaProfile from "components/profilePage/TopAreaProfile";
import { AppContext } from "context";
import { useContext } from "react";

export default function Profile() {
   const { isAuthenticated } = useContext(AppContext);
   console.log(isAuthenticated);
   return (
      <>
         <TopAreaProfile />
         <section className="profile pt-5 padding-b-120">
            <div className="container container-two">
               <div className="tab-content" id="pills-tabb">
                  <ProfileInfo />
                  <Templates />
                  <Settings />
                  <Earnings />
                  <Statement />
                  <Reviews />
                  <Download />
               </div>
            </div>
         </section>
      </>
   );
}
