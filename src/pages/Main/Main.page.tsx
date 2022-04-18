import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from '@expo/vector-icons/Ionicons';
import HomePage from "./Home/Home.page";
import ShoppingListsPage from "./ShoppingLists/ShoppingLists.page";

const MainPage: React.FC = () => {

    const Tab = createBottomTabNavigator();

    return (
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
    );
}

export default MainPage;