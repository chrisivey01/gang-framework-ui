import Apis from "../../services/api";

export const LOAD_STORE = "LOAD_STORE";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";
export const LOAD_STORE_FAILURE = "LOAD_STORE_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const PURCHASE_WEAPONS = "PURCHASE_WEAPONS";

export const loadStore = (items) => {
    return (dispatch) => {
        dispatch({ type: LOAD_STORE });
        if (process.env.NODE_ENV === "development") {
            dispatch(loadStoreSuccess(items));
        } else {
            if (items) {
                dispatch(loadStoreSuccess(items));
            } else {
                dispatch(loadStoreFailure());
            }
        }
    };
};

export const loadStoreSuccess = (items) => {
    return (dispatch) => {
        let filteredItems = new Map();
        let storeData = [];
        let cartData = new Map();

        items.forEach((item) => {
            if (filteredItems.get(item.name)) {
                const stock = filteredItems.get(item.name);
                stock.quantity++;
                filteredItems.set(item.name, stock);
            } else {
                const stock = {
                    quantity: 1,
                    name: item.name,
                    label: item.label,
                };

                const cart = {
                    quantity: 0,
                    name: item.name,
                    label: item.label,
                };

                cartData.set(item.name, cart);
                filteredItems.set(item.name, stock);
            }
        });

        storeData = {
            cart: cartData,
            items: filteredItems,
        };

        dispatch({
            type: LOAD_STORE_SUCCESS,
            payload: storeData,
        });
    };
};

export const loadStoreFailure = () => {
    return (dispatch) => {
        dispatch({
            type: LOAD_STORE_FAILURE,
            payload: "Some dirty message",
        });
    };
};

export const addToCart = (items, item, cart, amountOfWeapons) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        clonedItems.get(item.name).quantity -= 1;
        if (clonedItems.get(item.name).quantity < 0) {
            clonedItems.get(item.name).quantity = 0;
        } else {
            clonedCart.get(item.name).quantity++;
        }

        const data = {
            cart: clonedCart,
            items: clonedItems,
            amountOfWeapons: amountOfWeapons + 1
        };

        dispatch({
            type: ADD_TO_CART,
            payload: data,
        });
    };
};

export const removeFromCart = (items, item, cart, amountOfWeapons) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        clonedCart.get(item.name).quantity -= 1;
        if (clonedCart.get(item.name).quantity < 0) {
            clonedCart.get(item.name).quantity = 0;
        } else {
            clonedItems.get(item.name).quantity++;
        }

        amountOfWeapons = amountOfWeapons - 1
        if(amountOfWeapons <= 0){
            amountOfWeapons = 0
        }

        const data = {
            cart: clonedCart,
            items: clonedItems,
            amountOfWeapons: amountOfWeapons
        };

        dispatch({
            type: REMOVE_FROM_CART,
            payload: data,
        });
    };
};

export const purchaseWeapons = (store, cart, character) => {
    return (dispatch) => {
        let data = {};
        let boughtItems = [...cart.values()].map((items) => {
            if (items.quantity > 0) {
                return items;
            }
        });
        data.character = character;
        data.boughtItems = boughtItems;
        store = [...store].map(([name, value]) => {
            if(value.quantity > 0){
                return value
            } 
        })
        data.store = store.filter(item => item !== undefined)
        Apis.purchaseWeapons(data).then(() => {
            let copyCart = new Map(cart);

            [...copyCart].map(([cartName, cartValue]) => {
                if (copyCart.get(cartName).quantity > 0) {
                    return (copyCart.get(cartName).quantity = 0);
                }
            });

            dispatch({ type: PURCHASE_WEAPONS, payload: copyCart });
        });
    };
};

