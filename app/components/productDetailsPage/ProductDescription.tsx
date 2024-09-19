import { useContext } from "react";
import GallerySlider from "./GallerySlider";
import { AppContext } from "context";
import AuthorMoreItem from "./AuthorMoreItem";

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
                  <img src="assets/images/icons/eye-outline.svg" alt="" />
               </a>
            </div>
            <div>
               <h3>{templateData?.title}</h3>
               <p>{templateData?.description}</p>
            </div>

            {/* More Items from this author */}
           <AuthorMoreItem id={templateData?.author?._id} />
         </div>
      </div>
   );
}
