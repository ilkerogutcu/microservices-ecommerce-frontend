const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/profile",
  PRODUCT: {
    LIST: "/category/:id/products",
    DETAIL: "/products/:id",
  },
  BASKET: {
    LIST: "/basket",
  },
  CHECKOUT: "/checkout",
  PAYMENT_RESULT:{
    SUCCESS: "/payment/success",
    FAIL: "/payment/failure",
  }
} as const;

export default ROUTES;
