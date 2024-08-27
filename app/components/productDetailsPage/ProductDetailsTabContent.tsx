import ProductComments from "./Comments";
import ProductDescription from "./ProductDescription";
import ProductRatings from "./Ratings";

export default function ProductDetailsTabContent() {
   return (
      <div className="col-lg-8">
         <div className="tab-content" id="pills-tabContent">
            <ProductDescription />
            <ProductRatings />
            <ProductComments />
         </div>
      </div>
   );
}
