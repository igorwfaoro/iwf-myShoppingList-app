import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ShoppingListProduct } from '../../../../../../models/api/shopping-list-product';
import moment from 'moment';

interface ShoppingListProductComponentProps {
    shoppingListProduct: ShoppingListProduct;
    onPressItem?: (shoppingListProduct: ShoppingListProduct) => void;
}

const ShoppingListProductComponent: React.FC<ShoppingListProductComponentProps> = props => {

    return (
        <TouchableOpacity onPress={() => {
            if (props.onPressItem)
                props.onPressItem(props.shoppingListProduct)
        }}>
            <View style={styles.container}>
                <Image source={{ uri: props.shoppingListProduct.product.image }} style={styles.image} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>{props.shoppingListProduct.product.title}</Text>
                    <Text style={styles.brand}>{props.shoppingListProduct.product.brand}</Text>
                    <Text style={styles.barcode}>{props.shoppingListProduct.product.barcode}</Text>
                    <Text style={styles.createdAt}>
                        Incluído {moment(props.shoppingListProduct.product.createdAt).calendar().toLowerCase()}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ShoppingListProductComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    descriptionContainer: {
        flex: 1,
        marginLeft: 8,
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    brand: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
        textTransform: 'uppercase'
    },
    barcode: {
        fontSize: 14,
    },
    createdAt: {
        marginTop: 6,
        fontSize: 12,
        color: '#666'
    }
});