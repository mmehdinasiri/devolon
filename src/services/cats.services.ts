import { AxiosRequestConfig } from "axios";
import { GET_CAT_SEARCH } from "./urls";
import axiosInstance from "./axiosInstance";

export const getCatsService = (category: number, page = 0): Promise<ICat[]> => {
  const limit = 10;
  const reqConfig: AxiosRequestConfig = {
    method: "GET",
    url: `${GET_CAT_SEARCH}?limit=${limit}&category_ids=${category}&page=${page}`,
  };
  return axiosInstance(reqConfig).then((res) => res.data);
};
