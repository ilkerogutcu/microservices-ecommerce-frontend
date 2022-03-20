import { createContext, Dispatch, useContext } from "react";
import { ICustomerBasket } from "../../types/customerBasket";
import { IUser } from "../../types/user";

const initialAppState = {
  customerBasket: null as ICustomerBasket | null,
  currentUser: null as IUser | null,
};

type AppStateReducerAction =
  | { type: "SET_CUSTOMER_BASKET"; payload: ICustomerBasket }
  | { type: "SET_CURRENT_USER"; payload: IUser };

function appStateReducer(
  state = initialAppState,
  action: AppStateReducerAction
) {
  let newState = state;

  switch (action.type) {
    case "SET_CURRENT_USER":
      newState = {
        ...state,
        currentUser: action.payload as IUser,
      };
      break;

    case "SET_CUSTOMER_BASKET":
      newState = {
        ...state,
        customerBasket: action.payload as ICustomerBasket,
      };
      break;

    default:
      break;
  }

  return newState;
}

const AppContext = createContext({
  appState: initialAppState,
  dispatchAppStateAction: (() => undefined) as Dispatch<AppStateReducerAction>,
});

export default AppContext;
export { appStateReducer, initialAppState };
