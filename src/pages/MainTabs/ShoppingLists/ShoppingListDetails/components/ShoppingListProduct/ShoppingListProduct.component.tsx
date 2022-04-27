import { Image, Text, TouchableOpacity, View } from "react-native";
import { ShoppingListProduct } from "../../../../../../models/api/shopping-list-product";

interface ShoppingListProductComponentProps {
    shoppingListProduct: ShoppingListProduct;
}

const ShoppingListProductComponent: React.FC<ShoppingListProductComponentProps> = props => {

    return (
        <TouchableOpacity>
            <View>
                <Image source={{ uri: props.shoppingListProduct.product.image }} style={{ width: 100, height: 100 }} />
                <Text>{props.shoppingListProduct.product.title}</Text>
                <Text>{props.shoppingListProduct.product.brand}</Text>
                <Text>{props.shoppingListProduct.product.barcode}</Text>
                <Text>{props.shoppingListProduct.product.createdAt}</Text>
                <Text>{props.shoppingListProduct.quantity}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ShoppingListProductComponent;