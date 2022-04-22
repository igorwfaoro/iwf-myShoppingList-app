import { Text, View } from "react-native";
import { ShoppingList } from "../../../../../models/api/shopping-list";
import { shoppingListItemStyles } from "./ShoppingListItem.styles";

interface ShoppingListItemComponentProps {
    shoppingList: ShoppingList;
}

const ShoppingListItemComponent: React.FC<ShoppingListItemComponentProps> = props => {
    return (
        <View style={shoppingListItemStyles.item}>
            <Text style={shoppingListItemStyles.itemText}>{props.shoppingList.name}</Text>
        </View>
    );
}

export default ShoppingListItemComponent;