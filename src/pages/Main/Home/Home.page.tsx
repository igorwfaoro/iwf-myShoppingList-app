import { useEffect } from "react";
import { Text, View } from "react-native";
import { useLoader } from "../../../providers/loader.provider";
import { useToast } from "../../../providers/toast.provider";

const HomePage: React.FC = () => {

    const loader = useLoader();
    const toast = useToast();

    useEffect(() => {
        loader?.show('Boa noite');

        setTimeout(() => {
            loader?.dismiss();
            toast?.show('Boa tarde', 'success');
        }, 3000);
    }, []);

    return (
        <View>
            <Text>HomePage</Text>
        </View>
    );
}

export default HomePage;