import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/AuthApi";
import basketApi from "../../api/BasketApi";
import { ICustomerBasket } from "../../types/customerBasket";
import { IUser } from "../../types/user";
import AppContext, { appStateReducer, initialAppState } from "./AppContext";
import ROUTES from "./route/routes";

function AppContextProvider({ children }: { children: React.ReactElement }) {
  const navigate = useNavigate();
  const [appState, dispatchAppStateAction] = useReducer(
    appStateReducer,
    initialAppState
  );

  useEffect(() => {
    (async () => {
      const getCurrentUserResponse = await authApi.getCurrentUser();
      if (
        getCurrentUserResponse &&
        getCurrentUserResponse.data &&
        window.location.pathname === ROUTES.LOGIN
      ) {
        navigate(ROUTES.HOME);
      }

      dispatchAppStateAction({
        type: "SET_CURRENT_USER",
        payload: getCurrentUserResponse.data as IUser,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const getBasketItemsResponse = await basketApi.getBasketItems();

      dispatchAppStateAction({
        type: "SET_CUSTOMER_BASKET",
        payload: getBasketItemsResponse.data as ICustomerBasket,
      });
    })();
  }, []);

  return (
    <AppContext.Provider value={{ appState, dispatchAppStateAction }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
