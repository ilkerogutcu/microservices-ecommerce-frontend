import { createContext, Dispatch } from "react";
import { IUser } from "../../types/user";

const initialAppState = {
  currentUser: null as IUser | null,
};
type AppStateReducerAction =
  | {
      type: "SET_CURRENT_USER";
      payload: IUser;
    }
  | {
      type: "SET_CURRENT_asdasdasdasdUSER";
      payload: IUser;
    };

function appStateReducer(
  state = initialAppState,
  action: AppStateReducerAction
) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

const AppContext = createContext({
  appState: initialAppState,
  dispatchAppStateAction: (() => undefined) as Dispatch<AppStateReducerAction>,
});

export default AppContext;
export { appStateReducer, initialAppState };
