import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/server",
  withCredentials: true,
});

export default axiosInstance;
