const BASE_API_URL = 'http://localhost:3333';
const V1 = 'v1';

export const URLS = {
    api: {
        shoppingLists: {
            getAll: () => `${BASE_API_URL}/${V1}/shoppingLists`
        }
    }
}