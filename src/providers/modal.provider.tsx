import { createContext, ReactNode, useContext, useState } from "react";
import ModalComponent from "../components/Modal/Modal.component";
import { v4 as uuidV4 } from 'uuid';

export interface ModalOptions {
    component: React.FC<any>//ReactNode;
    props?: any;
    onClose?: (result?: any) => void;
}

export interface ModalRef {
    id: string;
    component: React.FC<any>//ReactNode;
    props?: any;
    close: (result?: any) => void;
}

export interface ModalProvider {
    open: (options: ModalOptions) => ModalRef;
    getModalRef: (props: any) => ModalRef;
}

const ModalContext = createContext<ModalProvider | undefined>(undefined);

const ModalProvider: React.FC = props => {

    const [modalList, setModalList] = useState<ModalRef[]>([]);

    const close = (id: string) => {
        setModalList(modalList.filter(modal => modal.id != id));
    }

    const open = (options: ModalOptions) => {

        const id = uuidV4();
        const modal: ModalRef = {
            id,
            component: options.component,
            props: options.props,
            close: (result?: any) => {
                close(id);
                if (options.onClose)
                    options.onClose(result);
            }
        };

        setModalList(ml => [...ml, modal]);
        return modal;
    }

    const getModalRef = (props: any) => {
        return props.modalRef;
    }

    return (
        <ModalContext.Provider value={{ open, getModalRef }}>
            {props.children}
            {modalList.map(modal => (
                <ModalComponent key={modal.id}>
                    <modal.component {...modal.props} modalRef={modal} />
                </ModalComponent>
            ))}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

export const useModal = () => useContext(ModalContext)!;