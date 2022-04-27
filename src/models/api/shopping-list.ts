import { ShoppingListProduct } from "./shopping-list-product";

export interface ShoppingList {
    id: number;
    name: string;
    shoppingListProducts: ShoppingListProduct[];
    createdAt: string;
}