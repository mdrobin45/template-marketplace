import axiosRequest from "./axiosRequest";

export const filterByCategory = async (category) => {
   try {
      const { data } = await axiosRequest.get(
         `/product/filter?category=${category}`
      );
      return data;
   } catch (err) {
      console.log(err);
   }
};
