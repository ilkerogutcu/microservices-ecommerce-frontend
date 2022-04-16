import { createContext, Dispatch, useContext } from "react";
import { IBasketItem } from "../../types/basketItem";
import { ICustomerBasket } from "../../types/customerBasket";
import { IUser } from "../../types/user";
import { replaceAtIndex } from "../util/arrayUtils";

const initialAppState = {
  customerBasket: null as ICustomerBasket | null,
  currentUser: null as IUser | null,
};

type AppStateReducerAction =
  | { type: "SET_CUSTOMER_BASKET"; payload: ICustomerBasket }
  | { type: "SET_CURRENT_USER"; payload: IUser }
  | { type: "ADD_BASKET_ITEM"; payload: IBasketItem }
  | { type: "REMOVE_BASKET_ITEM"; payload: IBasketItem };

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
    case "ADD_BASKET_ITEM":
      if (state.customerBasket) {
        let newBasketItem = action.payload as IBasketItem;

        const existingBasketItemIndex = state.customerBasket.items.findIndex(
          (basketItem) => basketItem.productId === newBasketItem.productId
        );

        if (existingBasketItemIndex > -1) {
          newBasketItem = {
            ...newBasketItem,
            quantity:
              state.customerBasket.items[existingBasketItemIndex].quantity + 1,
          };
          const newBasketItems = replaceAtIndex(
            state.customerBasket.items,
            existingBasketItemIndex,
            newBasketItem
          );
          newState = {
            ...state,
            customerBasket: {
              ...state.customerBasket,
              items: newBasketItems,
            },
          };
        } else {
          newState = {
            ...state,
            customerBasket: {
              ...state.customerBasket,
              items: [...state.customerBasket.items, newBasketItem],
            },
          };
        }
      }

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
