import { ShoppingList } from "../../models/api/shopping-list"
import { URLS } from "../urls"
import { createContext, useContext } from "react";
import { useHttp } from "../http";

export interface ShoppingListService {
    getAll(): Promise<ShoppingList[]>;
    getById(id: number): Promise<ShoppingList>;
}

const ShoppingListServiceContext = createContext<ShoppingListService | undefined>(undefined);

const ShoppingListServiceProvider: React.FC = props => {

    const http = useHttp();

    const getAll = async () => {
        return (await http().get<ShoppingList[]>(URLS.api.shoppingLists.getAll())).data;
    }

    const getById = async (id: number) => {
        return (await http().get<ShoppingList>(URLS.api.shoppingLists.getById(id))).data;
    }

    return (
        <ShoppingListServiceContext.Provider value={{ getAll, getById }}>
            {props.children}
        </ShoppingListServiceContext.Provider>
    );
};

export default ShoppingListServiceProvider;

export const useShoppingListService = () => useContext(ShoppingListServiceContext)!;