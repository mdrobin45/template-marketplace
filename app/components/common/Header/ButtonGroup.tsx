import userIcon from "@/assets/images/icons/user.svg";
import Image from "next/image";
import Button from "../Button";

export default function ButtonGroup() {
   return (
      <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
         <div className="loggedinUserWrapper">
            <div className="profile">
               <div className="img-box">
                  <Image
                     width={50}
                     height={50}
                     src="https://i.postimg.cc/BvNYhMHS/user-img.jpg"
                     alt="some user image"
                  />
               </div>
            </div>
            <div className="menu">
               <ul>
                  <li>
                     <a href="#">
                        <i className="ph-bold ph-user"></i>
                        &nbsp;Profile
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <Button label="Create Account" url="/register" size="small">
            <Image width={20} height={20} src={userIcon} alt="" />{" "}
         </Button>
      </div>
   );
}
