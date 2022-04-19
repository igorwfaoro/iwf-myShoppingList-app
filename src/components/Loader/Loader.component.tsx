import { ActivityIndicator, Text, View } from "react-native";
import { themeVariables } from "../../theme/variables";
import { loaderStyles } from "./Loader.styles";

interface LoaderComponentProps {
    message?: string;
}

const LoaderComponent: React.FC<LoaderComponentProps> = props => {

    return (
        <View style={loaderStyles.container}>
            <View style={loaderStyles.box}>
                <ActivityIndicator size="large" color={themeVariables.colorPrimary} />
                <Text style={loaderStyles.text}>{props.message || 'Carregando...'}</Text>
            </View>
        </View>
    );
}

export default LoaderComponent;