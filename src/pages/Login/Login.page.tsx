import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAuthService } from "../../api/services/auth.service";
import { useLoader } from "../../providers/loader.provider";
import { useToast } from "../../providers/toast.provider";

const LoginPage: React.FC = () => {

    const navigation = useContext(NavigationContext)!;
    const loader = useLoader();
    const toast = useToast();
    const authService = useAuthService();

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const login = () => {
        loader.show();
        authService.login(form.email, form.password).then(() => {
            navigation.navigate('Main');
        }).catch(error => {
            toast.show('Erro na autenticação', 'error');
        }).finally(() => loader.hide());
    }

    return (
        <View>
            <Text>LoginPage</Text>

            <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                value={form.email}
                onChangeText={text => setForm(f => ({ ...f, email: text }))}
            />

            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                value={form.password}
                onChangeText={text => setForm(f => ({ ...f, password: text }))}
            />

            <Button title="Entrar" onPress={() => login()} />
        </View>
    );
}

export default LoginPage;