import { IBasketItem } from "./basketItem";

export interface ICustomerBasket {
  buyerId: string;
  items: IBasketItem[];
}
