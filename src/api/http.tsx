import axios, { AxiosInstance } from 'axios';
import { createContext, useContext } from "react";
import { useStorage } from '../providers/storage.provider';

const HttpContext = createContext<AxiosInstance | undefined>(undefined);

const HttpProvider: React.FC = props => {

    const storage = useStorage();

    const http = axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storage?.data.token}`
        }
    });

    return (
        <HttpContext.Provider value={http}>
            {props.children}
        </HttpContext.Provider>
    );
}

export default HttpProvider;

export const useHttp = () => useContext(HttpContext)!;