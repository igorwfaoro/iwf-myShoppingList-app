import { User } from "../api/user";

export interface AppDataStorage {
    user?: User;
    token?: string;
}