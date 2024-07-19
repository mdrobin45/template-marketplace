import ProductComments from "./Comments";
import ProductDescription from "./ProductDescription";
import ProductRatings from "./Ratings";

export default function ProductDetailsTabContent() {
   return (
      <div class="col-lg-8">
         <div class="tab-content" id="pills-tabContent">
            <ProductDescription />
            <ProductRatings />
            <ProductComments />
         </div>
      </div>
   );
}
