import ProductDetailsTabContent from "components/productDetailsPage/ProductDetailsTabContent";
import Breadcrumb from "components/productDetailsPage/ProductDetailsTopArea";
import ProductDetailsSidebar from "components/productDetailsPage/Sidebar";

export default function ProductDetails() {
   return (
      <>
         <Breadcrumb />
         <div class="product-details mt-32 padding-b-120">
            <div class="container container-two">
               <div class="row gy-4">
                  <ProductDetailsTabContent />
                  <ProductDetailsSidebar />
               </div>
            </div>
         </div>
      </>
   );
}
