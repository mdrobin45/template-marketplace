import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "utils/api";

export default function useTemplateData({ slug }) {
   const { data, isLoading } = useQuery({
      queryKey: [`template-details`],
      queryFn: () => getProductBySlug(slug),
   });
   const templateData = { data, isLoading };
   return templateData;
}