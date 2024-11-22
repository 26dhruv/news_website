import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["X-Api-Key"] = import.meta.env.VITE_API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
