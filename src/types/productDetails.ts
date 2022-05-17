import { IOptionValueDetails } from "./optionValueDetails";

export interface IProductDetails {
  id: string;
  brandId: string;
  brand: string;
  name: string;
  modelCode: string;
  ratingAverage: number | null;
  ratingCount: number;
  longDescription: string;
  shortDescription: string;
  salePrice: number;
  listPrice: number;
  discountRate: number;
  isFreeShipping: boolean;
  color: string;
  hexCode: string;
  size: string;
  stockQuantity: number;
  imageUrls: string[];
  optionValues: IOptionValueDetails[];
}
