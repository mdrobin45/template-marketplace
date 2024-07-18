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
export const getFeaturedProduct = async () => {
   try {
      const { data } = await axiosRequest.get(`/product/featured`);
      return data;
   } catch {
      return null;
   }
};

// Get featured product
export const getBestSellingProduct = async () => {
   try {
      const { data } = await axiosRequest.get(`/product/best-selling`);
      return data;
   } catch {
      return null;
   }
};

// Get featured author
export const getFeaturedAuthor = async () => {
   try {
      const { data } = await axiosRequest.get(`/author/featured`);
      return data;
   } catch {
      return null;
   }
};
