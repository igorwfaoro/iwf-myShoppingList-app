import { createContext, useContext, useState } from "react";
import LoaderComponent from "../components/Loader/Loader.component";

export interface LoaderProvider {
    show: (message?: string) => void,
    hide: () => void
}

const LoaderContext = createContext<LoaderProvider | undefined>(undefined);

const LoaderProvider: React.FC = props => {

    const [showing, setShowing] = useState(false);
    const [message, setMessage] = useState<string>();

    const show = (message: string = 'Carregando...') => {
        setShowing(true);
        setMessage(message);
    }

    const hide = () => {
        setShowing(false);
        setMessage(undefined);
    }

    return (
        <LoaderContext.Provider value={{ show, hide }}>
            {showing && <LoaderComponent message={message} />}
            {props.children}
        </LoaderContext.Provider>
    );
};

export default LoaderProvider;

export const useLoader = () => useContext(LoaderContext)!;