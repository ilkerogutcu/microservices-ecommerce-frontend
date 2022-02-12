import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { IProduct } from "../types/product";

const catalogApi = {
  getTopProducts() {
    return apiHandler<IProduct>(NetworkManager, "get", "games");
  },
  CREATETopProducts(payload: IProduct) {
    return apiHandler<IProduct>(NetworkManager, "post", "", { payload });
  },
};
export default catalogApi;
