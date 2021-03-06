import { URLS } from "../urls"
import { createContext, useContext } from "react";
import { UserToken } from "../../models/api/user-token";
import { useStorage } from "../../providers/storage.provider";
import { useHttp } from "../http";

export interface AuthService {
    login(email: string, password: string): Promise<UserToken>;
    logout(): Promise<void>;
    isLogged(): boolean;
}

const AuthServiceContext = createContext<AuthService | undefined>(undefined);

const AuthServiceProvider: React.FC = props => {

    const http = useHttp();
    const storage = useStorage();

    const login = async (email: string, password: string) => {
        const authUser = (await http().post<UserToken>(URLS.api.auth.login, { email, password })).data;

        storage.setData({
            ...storage.getData(),
            user: authUser.user,
            token: authUser.token
        });

        await storage.saveData();

        return authUser;
    }

    const logout = async () => {
        await storage.clearData();
    }

    const isLogged = () => {
        return !!storage.getData().token;
    }

    return (
        <AuthServiceContext.Provider value={{ login, logout, isLogged }}>
            {props.children}
        </AuthServiceContext.Provider>
    );
};

export default AuthServiceProvider;

export const useAuthService = () => useContext(AuthServiceContext)!;