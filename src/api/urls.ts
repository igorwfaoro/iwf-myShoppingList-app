const BASE_API_URL = 'http://localhost:3333';
const V1 = 'v1';

export const URLS = {
    api: {
        auth: {
            login: `${BASE_API_URL}/${V1}/auth/login`
        },
        shoppingLists: {
            getAll: () => `${BASE_API_URL}/${V1}/shoppingLists`
        }
    }
}