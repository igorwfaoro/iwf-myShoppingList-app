import { ShoppingList } from "../../models/api/shopping-list"
import { http } from "../http"
import { URLS } from "../urls"

export const createShoppingListApiService = () => {

    const getAll = () => {
        return http.get<ShoppingList[]>(URLS.api.shoppingLists.getAll());
    }

    return {
        getAll
    }
}