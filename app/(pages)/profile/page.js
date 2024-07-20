import ProfileInfo from "components/profilePage/ProfileInfo";
import Settings from "components/profilePage/Settings";
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
               </div>
            </div>
         </section>
      </>
   );
}
