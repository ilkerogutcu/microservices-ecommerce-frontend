import axios, {
  AxiosRequestConfig,
  CancelTokenSource,
  AxiosPromise,
  CancelToken,
  AxiosInstance,
} from "axios";

import { RequestMethods } from "./networkModels";

export interface ApiHandlerOptions {
  payload?: any;
  settings?: AxiosRequestConfig;
}

export type ApiHandlerCreator<T, ResponseType = any> = (
  arg: T,
  cancelToken?: CancelToken
) => AxiosPromise<ResponseType>;

const apiHandler = <ResponseType = any>(
  apiManager: AxiosInstance,
  method: RequestMethods,
  url: string,
  options: ApiHandlerOptions = {
    payload: {},
    settings: {},
  }
): AxiosPromise<ResponseType> => {
  const settings = options.settings || {};
  const payload = options.payload || {};
  let source: CancelTokenSource;

  if (!settings.cancelToken) {
    source = axios.CancelToken.source();
    settings.cancelToken = source.token;
  }

  let request;

  if (method === "get") {
    request = apiManager.get(url, settings);
  } else if (method === "put") {
    request = apiManager.put(url, payload, settings);
  } else if (method === "patch") {
    request = apiManager.patch(url, payload, settings);
  } else if (method === "post") {
    request = apiManager.post(url, payload, settings);
  } else if (payload) {
    request = apiManager.delete(url, { data: payload, ...settings });
  } else {
    request = apiManager.delete(url, settings);
  }

  return request;
};

export default apiHandler;
