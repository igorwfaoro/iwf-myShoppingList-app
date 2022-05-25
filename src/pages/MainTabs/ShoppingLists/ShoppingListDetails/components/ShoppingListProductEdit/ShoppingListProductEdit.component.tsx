import { Button } from "@rneui/themed";
import { Image, Text, View } from "react-native";
import { ShoppingListProduct } from "../../../../../../models/api/shopping-list-product";
import { useModal } from "../../../../../../providers/modal.provider";

export interface ShoppingListProductEditComponentProps {
    shoppingListProduct: ShoppingListProduct;
}

const ShoppingListProductEditComponent: React.FC<ShoppingListProductEditComponentProps> = props => {

    const modalRef = useModal().getModalRef(props);

    return (
        <View>
            <Image source={{ uri: props.shoppingListProduct.product.image }} style={{ width: 100, height: 100 }} />
            <Text>{props.shoppingListProduct.product.title}</Text>
            <Text>{props.shoppingListProduct.product.brand}</Text>
            <Text>{props.shoppingListProduct.product.barcode}</Text>
            <Text>{props.shoppingListProduct.product.createdAt}</Text>
            <Text>{props.shoppingListProduct.quantity}</Text>

            <Button title="Cancelar" onPress={() => modalRef.close()}/>
        </View>
    );
}

export default ShoppingListProductEditComponent;