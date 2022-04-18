import { NavigationContext, useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Button, Text, View } from "react-native";

const LoginPage: React.FC = props => {

    const navigation = useContext(NavigationContext);
    
    useEffect(() => navigation?.navigate('Main'), []);

    return (
       <View>
           <Text>LoginPage</Text>
           <Button title="Main" onPress={() => navigation?.navigate('Main')} />
       </View>
    );
}

export default LoginPage;