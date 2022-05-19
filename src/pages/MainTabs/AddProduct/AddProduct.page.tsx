import { Button, Platform, StyleSheet, Text, View } from "react-native";
import ContentComponent from "../../../components/Content/Content.component";
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";
import { useProductService } from "../../../api/services/product.service";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";
import { Product } from "../../../models/api/product";
import BarcodeScanComponent from "./components/BarcodeScan/BarcodeScan";
import ProductReviewComponent from "./components/ProductReview/productReview";

const AddProductPage: React.FC = () => {

    const productService = useProductService();
    const loader = useLoader();
    const toast = useToast();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        setProduct({
            barcode: "7891098001504",
            brand: "Leao",
            createdAt: "2022-05-19T14:38:45.000Z",
            id: 6,
            image: "https://images.barcodelookup.com/5088/50882443-1.jpg",
            title: "Chá Leão Erva Doce Em Sachês - 10 Unidades"
        });
    }, []);

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
                    onConfirm={dto => console.log('confirm', dto)}
                />}

        </ContentComponent>
    );
}

export default AddProductPage;