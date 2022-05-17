export type RequestMethods = "get" | "post" | "put" | "patch" | "delete";
export type ListRequestResponse<T> = {
  data: T[];
  pageSize: number;
  pageIndex: number;
  count: number;
};
