import { URLS } from "../urls"
import { createContext, useContext } from "react";
import { useHttp } from "../http";
import { Product } from "../../models/api/product";

export interface ProductService {
    getByBarcode(barcode: string): Promise<Product>;
}

const ProductServiceContext = createContext<ProductService | undefined>(undefined);

const ProductServiceProvider: React.FC = props => {

    const http = useHttp();

    const getByBarcode = async (barcode: string) => {
        return (await http().get<Product>(URLS.api.products.getByBarcode(barcode))).data;
    }

    return (
        <ProductServiceContext.Provider value={{ getByBarcode }}>
            {props.children}
        </ProductServiceContext.Provider>
    );
};

export default ProductServiceProvider;

export const useProductService = () => useContext(ProductServiceContext)!;