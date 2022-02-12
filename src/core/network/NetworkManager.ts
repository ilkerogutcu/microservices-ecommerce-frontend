import axios, { AxiosRequestConfig } from "axios";

const BASE_CONFIG: AxiosRequestConfig = {
  baseURL: "https://duofinder-backend.herokuapp.com/api/",
  withCredentials: true,
};

function createAxiosInstance(config: AxiosRequestConfig) {
  return axios.create(config);
}

const NetworkManager = createAxiosInstance(BASE_CONFIG);

export default NetworkManager;
