import { Button, Platform, Text } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from "react";

interface BarcodeScanComponentProps {
    onBarCodeScanned: (barcode: string) => void;
}

const BarcodeScanComponent: React.FC<BarcodeScanComponentProps> = props => {

    const [hasPermission, setHasPermission] = useState<boolean>();

    useEffect(() => {
        if (Platform.OS != 'web')
            BarCodeScanner.requestPermissionsAsync().then(result => setHasPermission(result.status === 'granted'));
    }, []);

    return Platform.OS === 'web' ? (
        <Button title="read" onPress={() => props.onBarCodeScanned(prompt('Scan a barcode') || '7891153050768')} />
    ) : (
        hasPermission ? (
            <BarCodeScanner
                onBarCodeScanned={result => props.onBarCodeScanned(result.data)}
                style={{ width: '100%', height: '100%' }}
            />
        ) : (
            <Text>Sem permissão</Text>
        )
    )
}

export default BarcodeScanComponent;