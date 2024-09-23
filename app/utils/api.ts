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
// Get product by slug
export const getProductBySlug = async (slug: string): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.get(`/product/${slug}`);
      return data;
   } catch {
      return null;
   }
};

// Get author by id
export const getUserByUsername = async (username: string): Promise<any | null> => {
   try {
      const { data } = await axiosRequest.get(`/user/${username}`);
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
      const { data } = await axiosRequest.get(`/user/featured`);
      return data;
   } catch {
      return null;
   }
};

// Credential base user registration
export const credUserRegister = async (formData: {
   name: string;
   username: string;
   email: string;
   password: string;
}): Promise<any | null> => {
   try {
      const response = await axiosRequest.post(`/user/register`, formData);
      return response;
   } catch (err) {
      return err.response;
   }
};

// Username verifier
export const usernameVerifier = async (username: string): Promise<any | null> => {
   try {
      const response = await axiosRequest.post(`/user/register/usernameVerifier`, { username });
      return response;
   } catch (err) {
      return err.response;
   }
};
