import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppContextProvider from "./core/app/AppContextProvider";
import ROUTES from "./core/app/route/routes";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/product-detail/ProductDetail";
import ProductDiscover from "./pages/product-discover/ProductDiscover";
import Register from "./pages/register/Register";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.REGISTER} element={<Register />}></Route>
      <Route path={ROUTES.PRODUCT.DETAIL} element={<ProductDetail />}></Route>
      <Route path={ROUTES.BASKET.LIST} element={<Cart />}></Route>
      <Route path={ROUTES.PRODUCT.LIST} element={<ProductDiscover />}></Route>
    </Routes>
  );
}

export default App;
