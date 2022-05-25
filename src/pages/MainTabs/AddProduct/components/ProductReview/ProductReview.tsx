import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../../../../../models/api/product";
import { styles } from "./ProductReview.styles";
import { Button } from '@rneui/themed';
import { useShoppingListService } from "../../../../../api/services/shopping-list.service";
import { ShoppingList } from "../../../../../models/api/shopping-list";
import { useToast } from "../../../../../providers/toast.provider";
import SelectPickerComponent from "../../../../../components/SelectPicker/SelectPicker.component";
import InputCounterComponent from "../../../../../components/InputCounter/InputCounter.component";

interface ProductReviewProps {
    product: Product;
    onConfirm: (params: {
        shoppingListId: number;
        productId: number;
        quantity: number;
    }) => void;
    onCancel: () => void;
}

const ProductReviewComponent: React.FC<ProductReviewProps> = props => {

    const shoppingListService = useShoppingListService();
    const toast = useToast();

    const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);
    const [selectedShoppingList, setSelectedShoppingList] = useState<ShoppingList>();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        shoppingListService.getAll().then(response => {
            setShoppingLists(response);
        }).catch(() => toast.show('Erro ao carregar listas de compras'));
    }, []);

    const confirm = () => {

        if (!selectedShoppingList) {
            toast.show('Selecione uma lista de compras');
            return;
        }

        props.onConfirm({
            shoppingListId: selectedShoppingList!.id,
            productId: props.product.id,
            quantity: quantity
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.product.image }}
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>{props.product.title}</Text>
            <Text style={styles.brand}>{props.product.brand}</Text>
            <Text style={styles.barcode}>{props.product.barcode}</Text>

            <View style={styles.quantity}>
                <InputCounterComponent
                    minValue={1}
                    initialValue={quantity}
                    onChange={setQuantity}
                />
            </View>

            <View style={styles.shoppingLists}>
                <SelectPickerComponent
                    placeholder="Selecione uma lista de compras"
                    onValueChange={(value: { value: ShoppingList }) => setSelectedShoppingList(value.value)}
                    items={shoppingLists.map(sl => ({ label: sl.name, value: sl }))}
                />
            </View>

            <View style={styles.actions}>
                <Button
                    title="Cancelar"
                    type="outline"
                    containerStyle={{
                        width: '49%',
                        marginRight: '1%'
                    }}
                    onPress={() => props.onCancel()}
                />

                <Button
                    title="Confirmar"
                    containerStyle={{
                        width: '49%',
                        marginLeft: '1%'
                    }}
                    onPress={() => confirm()}
                />
            </View>

        </View>
    );
}

export default ProductReviewComponent;