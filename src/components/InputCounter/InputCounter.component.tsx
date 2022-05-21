import { Text, TextInput, TouchableHighlight, View } from "react-native";
import Ionicon from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { styles } from "./InputCounter.styles";

interface InputCounterProps {
    minValue?: number;
    initialValue: number;
    onChange: (value: number) => void;
}

const InputCounter: React.FC<InputCounterProps> = props => {

    const [value, setValue] = useState(props.initialValue);

    useEffect(() => {
        props.onChange(value);
    }, [value]);

    const decrease = () => {
        if (value > (props.minValue !== undefined ? props.minValue : 0)) {
            setValue(value - 1);
        }
    }

    const increase = () => {
        setValue(value + 1);
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.actionButton}
                onPress={() => decrease()}
            >
                <Ionicon
                    style={styles.actionButtonIcon}
                    name="md-remove-outline"
                    size={20}
                    color="gray"
                />
            </TouchableHighlight>

            <Text style={styles.text}>{value}</Text>

            <TouchableHighlight
                style={styles.actionButton}
                onPress={() => increase()}
            >
                <Ionicon
                    style={styles.actionButtonIcon}
                    name="md-add-outline"
                    size={20}
                    color="gray"
                />
            </TouchableHighlight>
        </View>
    );
}

export default InputCounter;