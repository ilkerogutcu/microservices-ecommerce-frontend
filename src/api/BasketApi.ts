import ROUTES from "../core/app/route/routes";
import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { IBasketItem } from "../types/basketItem";

const basketApi = {
  addItemToBasket(payload: IBasketItem) {
    return apiHandler<IBasketItem>(NetworkManager, "post", "add", {
      payload,
    });
  },
};
export default basketApi;
