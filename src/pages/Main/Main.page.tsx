import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from '@expo/vector-icons/Ionicons';
import HomePage from "./Home/Home.page";
import ShoppingListsPage from "./ShoppingLists/ShoppingLists.page";
import { useAuthService } from "../../api/services/auth.service";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import { NavigationContext } from "@react-navigation/native";

const MainPage: React.FC = () => {

    const Tab = createBottomTabNavigator();
    const authService = useAuthService();
    const navigation = useContext(NavigationContext)!;

    useEffect(() => {
        if (!authService.isLogged())
            navigation.navigate('Login');
    }, []);

    return authService.isLogged() ? (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{ tabBarIcon: () => <Ionicon name="home-outline" size={18} /> }}
            ></Tab.Screen>

            <Tab.Screen
                name="ShoppingLists"
                component={ShoppingListsPage}
                options={{ tabBarIcon: () => <Ionicon name="list-outline" size={18} /> }}
            ></Tab.Screen>
        </Tab.Navigator>
    ) : <View />;
}

export default MainPage;