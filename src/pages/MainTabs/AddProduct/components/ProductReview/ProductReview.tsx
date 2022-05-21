import { useEffect, useState } from "react";
import { Button, Dimensions, Image, Text, TextInput, View } from "react-native";
import ButtonComponent from "../../../../../components/Button/Button.component";
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
                <InputCounter
                    minValue={1}
                    initialValue={quantity}
                    onChange={setQuantity}
                />
            </View>

            <View style={styles.actions}>
                <ButtonComponent
                    text="Cancelar"
                    type="outline"
                    color="primary"
                    width="49%"
                    marginRight="1%"
                    onPress={() => props.onCancel()}
                />

                <ButtonComponent
                    text="Confirmar"
                    type="flat"
                    color="primary"
                    width="49%"
                    marginLeft="1%"
                    onPress={() => confirm()}
                />
            </View>

        </View>
    );
}

export default ProductReviewComponent;