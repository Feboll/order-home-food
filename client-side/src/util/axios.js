import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_SERVER_URL_PRODUCTION
    : process.env.REACT_APP_SERVER_URL;

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
