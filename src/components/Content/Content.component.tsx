import { ScrollView, View } from "react-native";
import { loaderStyles as contentStyles } from "./Content.styles";

const ContentComponent: React.FC = props => {

    return (
        <ScrollView style={contentStyles.container}>
            {props.children}
        </ScrollView>
    );
}

export default ContentComponent;