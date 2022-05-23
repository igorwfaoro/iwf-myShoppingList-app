
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Login/Login.page';
import MainTabs from './src/pages/MainTabs/MainTabs';
import ProviderComposerComponent from './src/components/ProviderComposer/ProviderComposer.component';
import ToastProvider from './src/providers/toast.provider';
import LoaderProvider from './src/providers/loader.provider';
import StorageProvider from './src/providers/storage.provider';
import AuthServiceProvider from './src/api/services/auth.service';
import ShoppingListServiceProvider from './src/api/services/shopping-list.service';
import HttpProvider from './src/api/http';
import ProductServiceProvider from './src/api/services/product.service';
import AccountPage from './src/pages/Account/Account.page';
import { ThemeProvider } from '@rneui/themed';
import { appTheme } from './src/theme/theme';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <ProviderComposerComponent components={[
      { component: ThemeProvider, props: { theme: appTheme } },
      { component: NavigationContainer },
      { component: ToastProvider },
      { component: LoaderProvider },
      { component: StorageProvider },
      { component: HttpProvider },
      { component: AuthServiceProvider },
      { component: ShoppingListServiceProvider },
      { component: ProductServiceProvider }
    ]}>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Account"
          component={AccountPage}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </ProviderComposerComponent>
  );
}

export default App;