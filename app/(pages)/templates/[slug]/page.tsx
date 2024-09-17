import ProductDetailsTabContent from "components/productDetailsPage/ProductDetailsTabContent";
import ProductDetailsTopArea from "components/productDetailsPage/ProductDetailsTopArea";
import ProductDetailsSidebar from "components/productDetailsPage/Sidebar";

export default function ProductDetails({ params }) {
   return (
      <>
         <ProductDetailsTopArea params={params} />
         <div className="product-details mt-32 padding-b-120">
            <div className="container container-two">
               <div className="row gy-4">
                  <ProductDetailsTabContent />
                  <ProductDetailsSidebar />
               </div>
            </div>
         </div>
      </>
   );
}
