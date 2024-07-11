import axiosRequest from "./axiosRequest";

// Filter product by category
export const filterByCategory = async (category) => {
   try {
      const { data } = await axiosRequest.get(
         `/product/filter?category=${category}`
      );
      return data;
   } catch {
      return null;
   }
};
