import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";

const orderApi = {
  GetPaymentHtmlContentOfOrder() {
    return apiHandler<string>(NetworkManager, "get", "orders/payment");
  },
};

export default orderApi;
