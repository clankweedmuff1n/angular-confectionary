export interface ProductRequest {
    name: string;
    description: string;
    type: string;
    price: number;
    category_id: number;
    gallery?: number[];
    preview?: number;
    reviews?: number[];
}
