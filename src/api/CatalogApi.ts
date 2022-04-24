import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { ListRequestResponse } from "../core/network/networkModels";
import { IComment } from "../types/comment";
import { IProduct } from "../types/product";
import { IProductCardViewModel } from "../types/productCardViewModel";
import { IProductDetails } from "../types/productDetails";

const catalogApi = {
  getTopProducts() {
    return apiHandler<IProductCardViewModel[]>(
      NetworkManager,
      "get",
      "catalog/top-products"
    );
  },
  getProductDetails(id: string) {
    return apiHandler<IProductDetails[]>(
      NetworkManager,
      "get",
      `catalog/products/${id}`
    );
  },
  getProductsByCategory(categoryId: string) {
    return apiHandler<ListRequestResponse<IProductCardViewModel>>(
      NetworkManager,
      "get",
      `catalog/category/${categoryId}/products?pageSize=5000`
    );
  },
  getCommentsOfProduct(id: string) {
    return apiHandler<IComment[]>(
      NetworkManager,
      "get",
      `catalog/products/${id}/comments`
    );
  },
  addComment(id: string, payload: IComment) {
    return apiHandler<IComment>(
      NetworkManager,
      "post",
      `catalog/products/${id}/comments`,
      { payload }
    );
  },
  CREATETopProducts(payload: IProduct) {
    return apiHandler<IProduct>(NetworkManager, "post", "", { payload });
  },
};
export default catalogApi;
