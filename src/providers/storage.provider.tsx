import { createContext, useContext, useEffect, useState } from "react";
import { AppDataStorage } from "../models/storage/app-data-storage";
import * as SecureStore from 'expo-secure-store';

const STORAGE_KEY = 'app-data';

export interface StorageProvider {
    getData(): Partial<AppDataStorage>;
    setData(data: Partial<AppDataStorage>): void;
    clearData(): Promise<void>;
    saveData(): Promise<void>;
    loadData(): Promise<void>;
}

const StorageContext = createContext<StorageProvider | undefined>(undefined);

let DATA: Partial<AppDataStorage> = {};

const StorageProvider: React.FC = props => {

    // const [data, setData] = useState<AppDataStorage>({});

    useEffect(() => {
        loadData();
    }, []);

    const saveData = async () => {
        if (await SecureStore.isAvailableAsync())
            SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(DATA));
        else
            localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA));
    }

    const loadData = async () => {
        if (await SecureStore.isAvailableAsync())
            DATA = JSON.parse(await SecureStore.getItemAsync(STORAGE_KEY) || '{}');
        else
            DATA = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }

    const clearData = async () => {
        DATA = {};
        await saveData();
    }

    const getData = () => DATA;

    const setData = (data: Partial<AppDataStorage>) => DATA = data;

    return (
        <StorageContext.Provider value={{ getData, setData, clearData, saveData, loadData }}>
            {props.children}
        </StorageContext.Provider>
    );
}

export default StorageProvider;

export const useStorage = () => useContext(StorageContext)!;