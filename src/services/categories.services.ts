import { AxiosRequestConfig } from "axios";
import { GET_CATEGORIES } from "./urls";
import axiosInstance from "./axiosInstance";

export const getCategoriesService = (): Promise<ICatCategory[]> => {
  const reqConfig: AxiosRequestConfig = {
    method: "GET",
    url: GET_CATEGORIES,
  };
  return axiosInstance(reqConfig).then((res) => res.data);
};
