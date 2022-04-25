import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";
import { ICategory } from "../types/category";

const categoryApi = {
  getCategoryById(id: string) {
    return apiHandler<ICategory>(NetworkManager, "get", "categories/" + id);
  },
};

export default categoryApi;
