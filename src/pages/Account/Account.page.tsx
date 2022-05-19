import { NavigationContext } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useAuthService } from "../../api/services/auth.service";
import ContentComponent from "../../components/Content/Content.component";
import { useLoader } from "../../providers/loader.provider";
import { useToast } from "../../providers/toast.provider";

const AccountPage: React.FC = () => {

    const navigation = useContext(NavigationContext)!;
    const loader = useLoader();
    const toast = useToast();
    const authService = useAuthService();

    const logout = () => {
        authService.logout().then(() => {
            navigation.navigate('Login');
        });
    }

    return (
        <ContentComponent>
            <Text>AccountPage</Text>
            <Button title="Sair" onPress={() => logout()} />
        </ContentComponent>
    );
}

export default AccountPage;