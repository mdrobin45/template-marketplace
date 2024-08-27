import axios from "axios";

const axiosRequest = axios.create({
   baseURL: process.env.NEXT_PUBLIC_SERVER_URL as string,
});

export default axiosRequest;
