import React from "react";
import AppContextProvider from "./core/app/AppContextProvider";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/product-detail/ProductDetail";
import ProductDiscover from "./pages/product-discover/ProductDiscover";
import Register from "./pages/register/Register";

function App() {
  return (
    <AppContextProvider>
      <ProductDiscover />
    </AppContextProvider>
  );
}

export default App;
