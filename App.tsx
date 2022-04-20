
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/Login/Login.page';
import MainPage from './src/pages/Main/Main.page';
import ProviderComposerComponent from './src/components/ProviderComposer/ProviderComposer.component';
import ToastProvider from './src/providers/toast.provider';
import LoaderComponent from './src/components/Loader/Loader.component';
import LoaderProvider from './src/providers/loader.provider';
import StorageProvider from './src/providers/storage.provider';
import AuthServiceProvider from './src/api/services/auth.service';
import ShoppingListServiceProvider from './src/api/services/shopping-list.service';
import HttpProvider from './src/api/http';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <ProviderComposerComponent components={[
      { component: NavigationContainer },
      { component: ToastProvider },
      { component: LoaderProvider },
      { component: StorageProvider },
      { component: HttpProvider },
      { component: AuthServiceProvider },
      { component: ShoppingListServiceProvider }
    ]}>
      <Stack.Navigator initialRouteName="Main">

        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
        >{() => <MainPage />}</Stack.Screen>

      </Stack.Navigator>
    </ProviderComposerComponent>
  );
}

export default App;