import { createContext, useContext } from "react";
import Toast from 'react-native-toast-message';

const TOAST_DURATION = 5000;
const TOAST_POSITION = 'bottom';

export type ToastType = 'success'|'error'|'info';

export interface ToastProvider {
    show: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastProvider | undefined>(undefined);

const ToastProvider: React.FC = props => {

    const show = (message: string, type: ToastType = 'info') => {
        Toast.show({
            type,
            text1: message,
            position: TOAST_POSITION,
            autoHide: true,
            visibilityTime: TOAST_DURATION
        });
    };

    return (
        <ToastContext.Provider value={{ show }}>
            {props.children}
            <Toast />
        </ToastContext.Provider>
    );
}

export default ToastProvider;

export const useToast = () => useContext(ToastContext)!;