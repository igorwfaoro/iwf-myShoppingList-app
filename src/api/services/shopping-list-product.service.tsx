import { URLS } from "../urls"
import { createContext, useContext } from "react";
import { useHttp } from "../http";
import { ShoppingListProductCreateDto } from "../../models/dto/shopping-list-product-create.dto";

export interface ShoppingListProductService {
    add(shoppingListId: number, dto: ShoppingListProductCreateDto): Promise<ShoppingListProductService>;
}

const ShoppingListProductServiceContext = createContext<ShoppingListProductService | undefined>(undefined);

const ShoppingListProductServiceProvider: React.FC = props => {

    const http = useHttp();

    const add = async (shoppingListId: number, dto: ShoppingListProductCreateDto) => {
        return (await http().post<ShoppingListProductService>(URLS.api.shoppingListProducts.add(shoppingListId), dto)).data;
    }

    return (
        <ShoppingListProductServiceContext.Provider value={{ add }}>
            {props.children}
        </ShoppingListProductServiceContext.Provider>
    );
};

export default ShoppingListProductServiceProvider;

export const useShoppingListProductService = () => useContext(ShoppingListProductServiceContext)!;