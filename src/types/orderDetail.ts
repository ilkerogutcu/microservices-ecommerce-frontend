import { IOrderItem } from "./orderItem";

export interface IOrderDetail {
  orderNumber: string;
  date: Date;
  status: string;
  city: string;
  district: string;
  zip: string;
  addressLine: string;
  orderItems: IOrderItem[];
  total: number;
}
