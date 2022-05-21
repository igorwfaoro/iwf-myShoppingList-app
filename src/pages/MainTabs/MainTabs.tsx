import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from '@expo/vector-icons/Ionicons';
import HomePage from "./Home/Home.page";
import ShoppingLists from "./ShoppingLists/ShoppingLists";
import { useAuthService } from "../../api/services/auth.service";
import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "@react-navigation/native";
import AddProductPage from "./AddProduct/AddProduct.page";
import { Button, View } from "react-native";
import ButtonComponent from "../../components/Button/Button.component";

const MainTabs: React.FC = () => {

    const Tab = createBottomTabNavigator();
    const authService = useAuthService();
    const navigation = useContext(NavigationContext)!;

    const headerRight = () => {
        return (
            <View style={{
                marginLeft: 16,
                marginRight: 16
            }}>
                <ButtonComponent
                    text="Logout"
                    type="outline"
                    onPress={() => {
                        authService.logout();
                        navigation.navigate('Login');
                    }}
                />
            </View>
        );
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerRight }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    headerTitle: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: () => <Ionicon name="home-outline" size={18} />
                }}
            ></Tab.Screen>

            <Tab.Screen
                name="AddProduct"
                component={AddProductPage}
                options={{
                    headerTitle: 'Adicionar produto',
                    tabBarLabel: 'Adicionar produto',
                    tabBarIcon: () => <Ionicon name="add-outline" size={18} />
                }}
            ></Tab.Screen>

            <Tab.Screen
                name="ShoppingLists"
                component={ShoppingLists}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Listas de compras',
                    tabBarIcon: () => <Ionicon name="list-outline" size={18} />
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

export default MainTabs;