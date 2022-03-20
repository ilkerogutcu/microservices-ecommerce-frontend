import ROUTES from "../core/app/route/routes";
import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { IBasketItem } from "../types/basketItem";
import { ICustomerBasket } from "../types/customerBasket";

const basketApi = {
  addItemToBasket(payload: IBasketItem) {
    return apiHandler(NetworkManager, "post", "basket", {
      payload,
    });
  },
  getBasketItems() {
    return apiHandler<ICustomerBasket>(NetworkManager, "get", "basket");
  },
};
export default basketApi;
