import { StyleSheet } from "react-native";

export const loaderStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    box: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        gap: 6
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});