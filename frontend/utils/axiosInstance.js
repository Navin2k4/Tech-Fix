import axios from "axios";

/**
 * Pre-configured Axios instance for making API requests to the backend.
 *
 * - `baseURL` is set to "/server", which prefixes all relative API routes.
 * - `withCredentials` is enabled to include cookies (e.g., JWT tokens) in cross-origin requests.
 *
 * Use this instance to avoid repeating common configuration across requests.
 *
 * @type {import("axios").AxiosInstance}
 */
const axiosInstance = axios.create({
  baseURL: "/server",
  withCredentials: true,
});

export default axiosInstance;
