import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { useShoppingListService } from "../../../../api/services/shopping-list.service";
import ContentComponent from "../../../../components/Content/Content.component";
import { ShoppingList } from "../../../../models/api/shopping-list";
import { useLoader } from "../../../../providers/loader.provider";
import { useToast } from "../../../../providers/toast.provider";
import ShoppingListProductComponent from "./components/ShoppingListProduct/ShoppingListProduct.component";

export interface ShoppingListDetailsParams {
    shoppingListId: number;
}

const ShoppingListDetailsPage: React.FC = () => {

    const route = useRoute();
    const loader = useLoader();
    const toast = useToast();
    const shoppingListService = useShoppingListService();

    const [shoppingList, setShoppingList] = useState<ShoppingList>();

    const params = route.params as ShoppingListDetailsParams;

    useEffect(() => {
        getShoppingList();
    }, []);

    const getShoppingList = () => {
        loader.show();
        shoppingListService.getById(params.shoppingListId).then(response => {
            loader.hide();
            setShoppingList(response);
        }).catch(() => {
            loader.hide();
            toast.show('Erro ao carregar lista de compras', 'error');
        });
    };

    return (
        <ContentComponent>
            <FlatList
                data={shoppingList?.shoppingListProducts}
                renderItem={({ item }) => <ShoppingListProductComponent shoppingListProduct={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </ContentComponent>
    );
}

export default ShoppingListDetailsPage;