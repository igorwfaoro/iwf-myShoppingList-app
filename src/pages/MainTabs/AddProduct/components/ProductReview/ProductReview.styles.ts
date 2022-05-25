import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    brand: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#6c6c6c',
        marginTop: 5
    },
    barcode: {
        marginTop: 5
    },
    quantity: {
        marginTop: 10
    },
    shoppingLists: {
        marginTop: 10
    },
    actions: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row'
    }
});