import { ImageType } from './global/common.type';

export interface IProduct {
  id: string;
  cover: ImageType;
  color: string;
  name: string;
  price: number;
  sale: boolean;
  saleCount: number;
  new: boolean;
  used: boolean;
  best: boolean;
  defective: boolean;
  brand: string;
  category: string;
  stars: number[];
}
