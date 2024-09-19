import { useContext } from "react";
import GallerySlider from "./GallerySlider";
import { AppContext } from "context";
import AuthorMoreItem from "./AuthorMoreItem";
import eyeIcon from "@/assets/images/icons/eye-outline.svg";
import "./style.css";
import Image from "next/image";

export default function ProductDescription() {
   const { templateData } = useContext(AppContext);
   return (
      <div
         className="tab-pane fade show active"
         id="pills-product-details"
         role="tabpanel"
         aria-labelledby="pills-product-details-tab"
         tabIndex={0}>
         <div className="product-details">
            <GallerySlider />
            <div className="product-details__buttons flx-align justify-content-center gap-3">
               <a
                  href="#"
                  className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center">
                  Live Preview
                  <Image src={eyeIcon} alt="Eye Icon" width={16} height={17} />
               </a>
            </div>
            <div>
               <h3>{templateData?.title}</h3>
               <div className="product-description" dangerouslySetInnerHTML={{ __html: templateData?.description }} />
            </div>

            {/* More Items from this author */}
           <AuthorMoreItem id={templateData?.author?._id} />
         </div>
      </div>
   );
}
