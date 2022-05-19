import { useEffect, useState } from "react";
import { Button, Dimensions, Image, Text, TextInput, View } from "react-native";
import InputCounter from "../../../../../components/InputCounter/InputCounter.component";
import { Product } from "../../../../../models/api/product";
import { ShoppingListProductCreateDto } from "../../../../../models/dto/shopping-list-product-create.dto";
import { styles } from "./ProductReview.styles";

interface ProductReviewProps {
    product: Product;
    onConfirm: (shoppingListProduct: ShoppingListProductCreateDto) => void;
    onCancel: () => void;
}

const ProductReviewComponent: React.FC<ProductReviewProps> = props => {

    const [quantity, setQuantity] = useState(1);

    const confirm = () => {
        props.onConfirm({
            productId: props.product.id,
            quantity: quantity
        });
    }

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.product.image }}
                    style={styles.image}
                />
            </View>

            <Text style={styles.title}>{props.product.title}</Text>
            <Text style={styles.brand}>{props.product.brand}</Text>
            <Text>{props.product.barcode}</Text>

            <InputCounter
                minValue={1}
                initialValue={quantity}
                onChange={setQuantity}
            />

            <Button title="Cancelar" onPress={() => props.onCancel()} />
            <Button title="Confirmar" onPress={() => confirm()} />
        </View>
    );
}

export default ProductReviewComponent;