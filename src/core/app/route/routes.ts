const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCT: {
    LIST: "/products",
    DETAIL: "/products/:id",
  },
  BASKET: {
    LIST: "/basket"
  },
} as const;

export default ROUTES;