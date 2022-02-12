import { useEffect, useReducer } from "react";
import AppContext, { appStateReducer, initialAppState } from "./AppContext";

function AppContextProvider({ children }: { children: React.ReactElement }) {
  const [appState, dispatchAppStateAction] = useReducer(
    appStateReducer,
    initialAppState
  );

  useEffect(() => {
    dispatchAppStateAction({
      type: "SET_CURRENT_USER",
      payload: {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "asdasdasd",
        addresses: ["asdasdasd", "asdasdasd"],
        birthDate: new Date(),
        twoFactorEnabled: true,
      },
    });
  }, []);
  return (
    <AppContext.Provider value={{ appState, dispatchAppStateAction }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
