"use client";

import { useQuery } from "@tanstack/react-query";
import { AppContext } from "context";
import { useContext } from "react";
import { getUserByUsername } from "utils/api";
import ProductInfo from "./ProductInfo";
import AuthorInfo from "./AuthorInfo";
import MetaAttributes from "./MetaAttributes";
interface ProductDetailsSidebarProps {
   username: string;
}

export default function ProductDetailsSidebar({ username }: ProductDetailsSidebarProps) {
   const { templateData, isLoading: productLoading } = useContext(AppContext);

   // Fetch author data
   const { data: author, isLoading } = useQuery({
      queryKey: [`author-${username}`],
      queryFn: () => getUserByUsername(username),
   });


   if (isLoading || productLoading) {
      return <div>Loading...</div>;
   }

   if (!author || !templateData) {
      return null;
   }
   return (
      <div className="col-lg-4">
         <div className="product-sidebar section-bg">
            <ProductInfo />
            <AuthorInfo author={author} />
            <MetaAttributes templateData={templateData} />
         </div>
      </div>
   );
}
