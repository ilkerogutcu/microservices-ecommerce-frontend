import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./compenents/require-auth/RequireAuth";
import Result from "./compenents/result/Result";

import AppContextProvider from "./core/app/AppContextProvider";
import ROUTES from "./core/app/route/routes";
import useAppContext from "./core/app/util/useAppContext";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/product-detail/ProductDetail";
import ProductDiscover from "./pages/product-discover/ProductDiscover";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  const {
    appState: { currentUser },
  } = useAppContext();
  return (
    <Routes>
      {/* <Route path={ROUTES.HOME} element={<Profile />}></Route> */}

      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route
        path={ROUTES.PROFILE}
        element={<RequireAuth children={<Profile />}></RequireAuth>}
      ></Route>
      <Route path={ROUTES.LOGIN} element={<Login />}></Route>
      <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />}></Route>
      <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />}></Route>

      <Route path={ROUTES.REGISTER} element={<Register />}></Route>
      <Route path={ROUTES.PRODUCT.DETAIL} element={<ProductDetail />}></Route>
      <Route path={ROUTES.BASKET.LIST} element={<Cart />}></Route>
      <Route path={ROUTES.PRODUCT.LIST} element={<ProductDiscover />}></Route>
      <Route path={ROUTES.CHECKOUT} element={<Checkout />}></Route>
      <Route
        path={ROUTES.PAYMENT_RESULT.SUCCESS}
        element={
          <Result
            status="success"
            title="Ödeme Başarılı"
            message="Siparişiniz başarıyla oluşturuldu anasayfaya yönlendiriliyorsunuz..."
          />
        }
      ></Route>
      <Route
        path={ROUTES.PAYMENT_RESULT.FAIL}
        element={
          <Result
            status="error"
            title="Ödeme Başarısız"
            message="Ödeme yapılırken bir hata oluştu anasayfaya yönlendiriliyorsunuz. Lütfen tekrar deneyiniz..."
          />
        }
      ></Route>
    </Routes>
  );
}

export default App;
