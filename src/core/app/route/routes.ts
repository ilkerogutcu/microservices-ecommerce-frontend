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
} as const;

export default ROUTES;
