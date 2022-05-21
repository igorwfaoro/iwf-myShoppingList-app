import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableHighlight, ViewStyle } from "react-native";
import { themeVariables } from "../../theme/variables";

interface ButtonComponentProps {
    text: string;
    type?: 'flat' | 'outline',
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    onPress: (event: GestureResponderEvent) => void,
    width?: number | string,
    marginLeft?: number | string,
    marginRight?: number | string
}

const ButtonComponent: React.FC<ButtonComponentProps> = props => {

    const styleType: {
        flat: { button: StyleProp<ViewStyle>, text: StyleProp<TextStyle> },
        outline: { button: StyleProp<ViewStyle>, text: StyleProp<TextStyle> }
    } = {
        flat: {
            button: {
                backgroundColor: themeVariables.colors[props.color || 'primary']
            },
            text: {
                color: themeVariables.colors.white
            }
        },
        outline: {
            button: {
                borderColor: themeVariables.colors[props.color || 'primary'],
                borderStyle: 'solid',
                borderWidth: 1
            },
            text: {
                color: themeVariables.colors[props.color || 'primary']
            }
        }
    };

    return (
        <TouchableHighlight
            style={{
                ...styleType[props.type || 'flat'].button as any,
                width: props.width,
                marginLeft: props.marginLeft || 0,
                marginRight: props.marginRight || 0,
                borderRadius: 4,
                paddingVertical: 6,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={event => props.onPress(event)}
        >
            <Text style={{
                ...styleType[props.type || 'flat'].text as any,
                fontSize: 16,
                lineHeight: 21,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                textTransform: 'uppercase'
            }}>{props.text}</Text>

        </TouchableHighlight>
    );
}

export default ButtonComponent;