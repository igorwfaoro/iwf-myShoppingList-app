import ContentComponent from "../../../components/Content/Content.component";
import { useEffect, useState } from "react";
import { useProductService } from "../../../api/services/product.service";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";
import { Product } from "../../../models/api/product";
import BarcodeScanComponent from "./components/BarcodeScan/BarcodeScan";
import ProductReviewComponent from "./components/ProductReview/ProductReview";
import { useShoppingListProductService } from "../../../api/services/shopping-list-product.service";

const AddProductPage: React.FC = () => {

    const productService = useProductService();
    const shoppingListProductService = useShoppingListProductService();
    const loader = useLoader();
    const toast = useToast();

    const [product, setProduct] = useState<Product | undefined>({
        barcode: "7891098001504",
        brand: "Leao",
        createdAt: "2022-05-19T14:38:45.000Z",
        id: 6,
        image: "https://images.barcodelookup.com/5088/50882443-1.jpg",
        title: "Chá Leão Erva Doce Em Sachês - 10 Unidades"
    });

    const confirmProduct = (params: {
        shoppingListId: number,
        productId: number;
        quantity: number;
    }) => {
        loader.show();
        shoppingListProductService.add(params.shoppingListId, {
            productId: params.productId,
            quantity: params.quantity
        }).then(response => {
            toast.show("Produto adicionado com sucesso");
            setProduct(undefined);
        }).catch(error => {
            toast.show('Erro ao adicionar produto');
            throw error;
        }).finally(() => loader.hide());
    }

    const handleBarCodeScanned = (barcode: string) => {
        loader.show();
        productService.getByBarcode(barcode).then(response => {
            setProduct(response);
        }).catch(error => {
            console.log('Não encontrado');
        }).finally(() => loader.hide());
    };

    return (
        <ContentComponent>

            {!product
                ? <BarcodeScanComponent onBarCodeScanned={barcode => handleBarCodeScanned(barcode)} />
                : <ProductReviewComponent
                    product={product}
                    onCancel={() => setProduct(undefined)}
                    onConfirm={params => confirmProduct(params)}
                />}

        </ContentComponent>
    );
}

export default AddProductPage;