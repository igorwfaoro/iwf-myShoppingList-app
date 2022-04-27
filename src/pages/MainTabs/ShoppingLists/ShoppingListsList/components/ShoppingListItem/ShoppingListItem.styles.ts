import { StyleSheet } from "react-native";

export const shoppingListItemStyles = StyleSheet.create({
    item: {
        paddingTop: 8,
        paddingBottom: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});