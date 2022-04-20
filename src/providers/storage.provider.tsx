import { createContext, useContext, useEffect, useState } from "react";
import { AppDataStorage } from "../models/storage/app-data-storage";

const STORAGE_KEY = 'app-data';

export interface StorageProvider {
    data: AppDataStorage;
    setData: React.Dispatch<React.SetStateAction<AppDataStorage>>;
    saveData(): void;
    loadData(): void;
}

const StorageContext = createContext<StorageProvider | undefined>(undefined);

const StorageProvider: React.FC = props => {

    const [data, setData] = useState<AppDataStorage>({});

    useEffect(() => loadData(), []);

    const saveData = () => {
        console.log(data);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    const loadData = () => {
        setData(JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
    }

    return (
        <StorageContext.Provider value={{ data, setData, saveData, loadData }}>
            {props.children}
        </StorageContext.Provider>
    );
}

export default StorageProvider;

export const useStorage = () => useContext(StorageContext)!;