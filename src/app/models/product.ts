import {GalleryItem} from "./galleryItem";
import {Review} from "./review";

export interface Product {
  id: number;
  name: string;
  description: string;
  productType: string;
  price: number;
  created_at: Date;
  updated_at: Date;
  reviews: Review[];
  preview: GalleryItem;
  gallery: GalleryItem[];
}
