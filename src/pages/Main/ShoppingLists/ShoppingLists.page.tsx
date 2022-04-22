import { NavigationContext } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useShoppingListService } from "../../../api/services/shopping-list.service";
import ContentComponent from "../../../components/Content/Content.component";
import { ShoppingList } from "../../../models/api/shopping-list";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";
import ShoppingListItemComponent from "./components/ShoppingListItem/ShoppingListItem.component";

const ShoppingListsPage: React.FC = () => {

    const loader = useLoader();
    const toast = useToast();
    const shoppingListService = useShoppingListService();
    const navigation = useContext(NavigationContext)!;

    const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);

    useEffect(() => {
        navigation.setOptions({ title: "Minhas Listas" });
        getShoppingLists();
    }, []);

    const getShoppingLists = () => {
        loader.show();
        shoppingListService.getAll().then(response => {
            setShoppingLists(response);
        }).catch(error => {
            toast.show('Erro ao carregar listas de compras', 'error');
        }).finally(() => loader.hide());
    };

    return (
        <ContentComponent>
            <FlatList
                data={shoppingLists}
                renderItem={({ item }) => <ShoppingListItemComponent shoppingList={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </ContentComponent>
    );
}

export default ShoppingListsPage;