import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get("window").width * 0.7,
        height: Dimensions.get("window").width * 0.7,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    brand: {
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#6c6c6c'
    }
});