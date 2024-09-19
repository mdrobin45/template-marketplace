"use client";
import { useQuery } from "@tanstack/react-query";
import ProductDetailsTabContent from "components/productDetailsPage/ProductDetailsTabContent";
import ProductDetailsTopArea from "components/productDetailsPage/ProductDetailsTopArea";
import ProductDetailsSidebar from "components/productDetailsPage/Sidebar";
import { AppContext } from "context";
import { useContext, useEffect } from "react";
import { getProductBySlug } from "utils/api";

export default function ProductDetails({ params }) {
   const { setTemplateData } = useContext(AppContext);
   const { data, isLoading } = useQuery({
      queryKey: [`template-details`],
      queryFn: () => getProductBySlug(params?.slug),
   });
   useEffect(() => {
      setTemplateData(data);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data, isLoading]);
   return (
      <>
         {!isLoading ? (
            <>
               <ProductDetailsTopArea />
               <div className="product-details mt-32 padding-b-120">
                  <div className="container container-two">
                     <div className="row gy-4">
                        <ProductDetailsTabContent />
                        <ProductDetailsSidebar id={data?.author?._id} />
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <div>Loading</div>
         )}
      </>
   );
}
