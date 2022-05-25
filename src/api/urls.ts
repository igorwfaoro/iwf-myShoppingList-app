const BASE_API_URL = 'http://192.168.15.9:3333';
const V1 = 'v1';

export const URLS = {
    api: {
        auth: {
            login: `${BASE_API_URL}/${V1}/auth/login`
        },
        shoppingLists: {
            getAll: () => `${BASE_API_URL}/${V1}/shoppingLists`,
            getById: (id: number) => `${BASE_API_URL}/${V1}/shoppingLists/${id}`
        },
        products: {
            getByBarcode: (barcode: string) => `${BASE_API_URL}/${V1}/products/barcode/${barcode}`
        },
        shoppingListProducts: {
            add: (shoppingListId: number) => `${BASE_API_URL}/${V1}/shoppingLists/${shoppingListId}/products/add`
        },
    }
}