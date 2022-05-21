import { StyleSheet } from "react-native";
import { themeVariables } from "../../theme/variables";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 18,
        marginRight: 18
    },
    actionButton: {
        padding: 6,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: themeVariables.colors.primary,
        borderRadius: 4
    },
    actionButtonIcon: {
        color: '#000'
    }
});