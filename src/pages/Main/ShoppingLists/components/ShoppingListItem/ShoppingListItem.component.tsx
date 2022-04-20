import { Text, View } from "react-native";
import { ShoppingList } from "../../../../../models/api/shopping-list";

interface ShoppingListItemComponentProps {
    shoppingList: ShoppingList;
}

const ShoppingListItemComponent: React.FC<ShoppingListItemComponentProps> = props => {
    return (
       <View>
           <Text>{props.shoppingList.name}</Text>
       </View>
    );
}

export default ShoppingListItemComponent;