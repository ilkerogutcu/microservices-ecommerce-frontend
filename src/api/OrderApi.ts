import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { IOrderDetail } from "../types/orderDetail";

const orderApi = {
  GetPaymentHtmlContentOfOrder() {
    return apiHandler<string>(NetworkManager, "get", "orders/payment");
  },
  GetOrdersOfCurrentUser() {
    return apiHandler<IOrderDetail[]>(NetworkManager, "get", "orders/me");
  },
};

export default orderApi;
