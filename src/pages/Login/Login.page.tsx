import { NavigationContext, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const LoginPage: React.FC = props => {

    const navigation = useContext(NavigationContext);

    // const form = useState({
    //     email: '',
    //     password: ''
    // });

    return (
       <View>
           <Text>LoginPage</Text>

           {/* <TextInput onChangeText={text => } /> */}
           {/* <Button title="Main" onPress={() => navigation?.navigate('Main')} /> */}
       </View>
    );
}

export default LoginPage;