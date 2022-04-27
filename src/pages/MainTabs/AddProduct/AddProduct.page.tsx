import { Button, StyleSheet, Text, View } from "react-native";
import ContentComponent from "../../../components/Content/Content.component";
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";
import { useProductService } from "../../../api/services/product.service";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";

const AddProductPage: React.FC = () => {

    const productService = useProductService();
    const loader = useLoader();
    const toast = useToast();

    const [hasPermission, setHasPermission] = useState<boolean>();

    useEffect(() => {
        // BarCodeScanner.requestPermissionsAsync().then(result => setHasPermission(result.status === 'granted'));
    }, []);

    const handleBarCodeScanned = (barcode: string) => {
        console.log('barcode', barcode);
        
        loader.show();
        productService.getByBarcode(barcode).then(response => {
            console.log(response);
        }).catch(error => {
            console.log('Não encontrado');
        }).finally(() => loader.hide());
    };

    return (
        <ContentComponent>
            <Button title="read" onPress={() => handleBarCodeScanned(prompt('Scan a barcode') || '7891153050768')} />
            {/* <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={{width: '100%', height: '100%'}}
            /> */}
            
        </ContentComponent>
    );
}

export default AddProductPage;