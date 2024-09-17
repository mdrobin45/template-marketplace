"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "utils/api";

interface PropsType {
   key: string;
   slug?: string;
}
export default function useFetch({ key, slug }: PropsType) {
   const { data, isLoading } = useQuery({
      queryKey: [`${key}`],
      queryFn: () => getProductBySlug(slug),
   });
   return { data, isLoading };
}
