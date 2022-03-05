import axios, { AxiosRequestConfig } from "axios";

const BASE_CONFIG: AxiosRequestConfig = {
  baseURL: "http://localhost:5000/",
};

function createAxiosInstance(config: AxiosRequestConfig) {
  return axios.create(config);
}

const NetworkManager = createAxiosInstance(BASE_CONFIG);

export default NetworkManager;
