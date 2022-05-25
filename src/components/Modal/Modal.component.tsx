import { Modal, View } from "react-native";

const ModalComponent: React.FC = props => {

    return (
        <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            transparent={true}
        >
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(0,0,0,0.5)",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: '90%',
                    height: '90%',
                    padding: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 10
                }}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
}

export default ModalComponent;