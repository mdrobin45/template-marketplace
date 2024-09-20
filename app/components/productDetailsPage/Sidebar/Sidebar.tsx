"use client";

import { useQuery } from "@tanstack/react-query";
import { AppContext } from "context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { getAuthorById, getProductBySlug } from "utils/api";
import moment from "moment";
import ProductInfo from "./ProductInfo";
import AuthorInfo from "./AuthorInfo";
import MetaAttributes from "./MetaAttributes";
interface ProductDetailsSidebarProps {
   id: string;
}

export default function ProductDetailsSidebar({ id }: ProductDetailsSidebarProps) {
   const { templateData, isLoading: productLoading } = useContext(AppContext);

   // Fetch author data
   const { data: author, isLoading } = useQuery({
      queryKey: [`author-${id}`],
      queryFn: () => getAuthorById(id),
   });
   console.log("Author", author);
   console.log("Product Data", templateData);


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
