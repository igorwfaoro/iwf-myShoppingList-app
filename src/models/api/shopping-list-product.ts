import { Product } from "./product";

export interface ShoppingListProduct {
    id: number;
    product: Product;
    quantity: number;
    createdAt: string;
}