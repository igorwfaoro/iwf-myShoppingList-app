import { Text } from "react-native";
import ContentComponent from "../../../components/Content/Content.component";
import { Button } from '@rneui/themed';
import Ionicon from '@expo/vector-icons/Ionicons';

const HomePage: React.FC = () => {

    return (
        <ContentComponent>
            <Text>HomePage</Text>

            <Button title="Confirmar" onPress={console.log} style={{width: '50%'}} />
            <Button title="Confirmar" onPress={console.log} type="outline" />
            <Button title="Confirmar" onPress={console.log} color="warning" />

            <Button onPress={console.log}>
                icon
                <Ionicon
                    name="home-outline"
                    size={20}
                    color="gray"
                />
            </Button>


        </ContentComponent>
    );
}

export default HomePage;