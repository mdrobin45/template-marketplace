import axiosRequest from "./axiosRequest";

// Filter product by category
export const filterByCategory = async (
   category: string
): Promise<any | null> => {
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
export const getFeaturedProduct = async (): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.get(`/product/featured`);
      return data;
   } catch {
      return null;
   }
};

// Get featured product
export const getBestSellingProduct = async (): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.get(`/product/best-selling`);
      return data;
   } catch {
      return null;
   }
};

// Get featured author
export const getFeaturedAuthor = async (): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.get(`/author/featured`);
      return data;
   } catch {
      return null;
   }
};

// Credential base user registration
export const credUserRegister = async (formData: {
   name: string;
   email: string;
   password: string;
}): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.post(
         `/auth/credential/signup`,
         formData
      );
      return data;
   } catch {
      return null;
   }
};
