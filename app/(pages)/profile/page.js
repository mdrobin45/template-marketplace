import Download from "components/profilePage/Download";
import Earnings from "components/profilePage/Earnings";
import ProfileInfo from "components/profilePage/ProfileInfo";
import Reviews from "components/profilePage/Reviews";
import Settings from "components/profilePage/Settings";
import Statement from "components/profilePage/Statement";
import Templates from "components/profilePage/Templates";
import TopAreaProfile from "components/profilePage/TopAreaProfile";

export default function Profile() {
   return (
      <>
         <TopAreaProfile />
         <section class="profile pt-5 padding-b-120">
            <div class="container container-two">
               <div class="tab-content" id="pills-tabb">
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
