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

// Get featured product
export const featuredProduct = async () => {
   try {
      const { data } = await axiosRequest.get(`/product/featured`);
      return data;
   } catch {
      return null;
   }
};
