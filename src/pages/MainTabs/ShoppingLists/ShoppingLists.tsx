import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingListDetailsPage from "./ShoppingListDetails/ShoppingListDetails.page";
import ShoppingListsListPage from "./ShoppingListsList/ShoppingListsList.page";

const ShoppingLists: React.FC = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="List">

            <Stack.Screen
                name="List"
                component={ShoppingListsListPage}
                options={{
                    headerTitle: 'Minhas listas'
                }}
            />

            <Stack.Screen
                name="Details"
                component={ShoppingListDetailsPage}
                options={{
                    headerTitle: 'Detalhes'
                }}
            />

        </Stack.Navigator>
    );
}

export default ShoppingLists;