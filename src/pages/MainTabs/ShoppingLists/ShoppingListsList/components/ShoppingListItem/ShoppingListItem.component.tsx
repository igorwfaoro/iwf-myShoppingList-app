import { Text, TouchableOpacity, View } from "react-native";
import { ShoppingList } from "../../../../../../models/api/shopping-list";
import { shoppingListItemStyles } from "./ShoppingListItem.styles";
import Ionicon from '@expo/vector-icons/Ionicons';
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import { ShoppingListDetailsParams } from "../../../ShoppingListDetails/ShoppingListDetails.page";

interface ShoppingListItemComponentProps {
    shoppingList: ShoppingList;
}

const ShoppingListItemComponent: React.FC<ShoppingListItemComponentProps> = props => {

    const navigation = useContext(NavigationContext)!;

    const goToDetails = () => {
        navigation.navigate('ShoppingLists', {
            screen: 'Details',
            params: { shoppingListId: props.shoppingList.id } as ShoppingListDetailsParams
        });
    };

    return (
        <TouchableOpacity onPress={() => goToDetails()}>
            <View style={shoppingListItemStyles.item}>
                <Text style={shoppingListItemStyles.itemText}>{props.shoppingList.name}</Text>
                <Ionicon name="md-chevron-forward-outline" size={20} color="gray" />
            </View>
        </TouchableOpacity>
    );
}

export default ShoppingListItemComponent;