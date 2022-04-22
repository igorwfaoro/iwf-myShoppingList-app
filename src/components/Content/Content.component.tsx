import { View } from "react-native";
import { loaderStyles as contentStyles } from "./Content.styles";

const ContentComponent: React.FC = props => {

    return (
        <View style={contentStyles.container}>
            {props.children}
        </View>
    );
}

export default ContentComponent;