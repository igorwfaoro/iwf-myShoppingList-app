import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useShoppingListService } from "../../../api/services/shopping-list.service";
import { ShoppingList } from "../../../models/api/shopping-list";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";
import ShoppingListItemComponent from "./components/ShoppingListItem/ShoppingListItem.component";

const ShoppingListsPage: React.FC = () => {

    const loader = useLoader();
    const toast = useToast();
    const shoppingListService = useShoppingListService();

    const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);

    useEffect(() => {
        getShoppingLists();
    }, []);

    const getShoppingLists = () => {
        loader.show();
        shoppingListService.getAll().then(response => {
            setShoppingLists(response);
        }).catch(error => {
            toast.show('Erro ao carregar listas de compras', 'error');
        }).finally(() => loader.dismiss());
    };

    return (
        <View>
            <Text>Minhas listas</Text>

            <FlatList
                data={shoppingLists}
                renderItem={({ item }) => <ShoppingListItemComponent shoppingList={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

export default ShoppingListsPage;