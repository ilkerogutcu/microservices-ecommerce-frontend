import apiHandler from "../core/network/apiHandler";
import NetworkManager from "../core/network/NetworkManager";

const cityApi = {
  getCities() {
    return apiHandler<{ id: string; name: string }[]>(
      NetworkManager,
      "get",
      "cities"
    );
  },
  getDistrictsOfCity: (id: string) => {
    return apiHandler<{ id: string; name: string; cityId: string }[]>(
      NetworkManager,
      "get",
      `cities/${id}/districts`
    );
  },
};

export default cityApi;