/* eslint-disable no-console */
import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json-patch+json",
    accept: "/",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`Interceptor Response Error${error}`);
    if (error.response.status === 400) {
      console.log("Bad Request");
    } else if (error.response.status === 401) {
      console.log("Unauthorized client error");
    } else if (error.response.status === 403) {
      console.log("Forbidden request");
    } else if (error.response.status === 404) {
      console.log("Not Found");
    } else if (error.response.status === 500) {
      console.log("Internal Server Error");
    } else {
      console.log("Something has problem");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
