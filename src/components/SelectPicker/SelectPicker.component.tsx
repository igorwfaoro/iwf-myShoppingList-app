import { Platform, StyleSheet } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";

type SelectPickerComponentProps = PickerSelectProps

const SelectPickerComponent: React.FC<SelectPickerComponentProps> = props => {

    return Platform.OS != 'web' ? (
        <RNPickerSelect {...props} style={{
            ...{
                inputIOS: {
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                    color: 'black',
                    paddingRight: 30 // to ensure the text is never behind the icon
                },
                inputAndroid: {
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    borderColor: 'purple',
                    borderRadius: 8,
                    color: 'black',
                    paddingRight: 30 // to ensure the text is never behind the icon
                }
            },
            ...props.style
        }} />
    ) : (
        <select
            onChange={value => props.onValueChange(props.items[Number(value.target.value)], Number(value))}
            defaultValue="_"
        >
            <option disabled value="_">{props.placeholder || 'Selecione um item'}</option>

            {props.items.map((item, i) => (
                <option key={i} value={i}>{item.label}</option>
            ))}
        </select>
    );
}

export default SelectPickerComponent;