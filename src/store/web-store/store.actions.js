export const LOAD_STORE = "LOAD_STORE";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";
export const LOAD_STORE_FAILURE = "LOAD_STORE_FAILURE";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

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
                    price: item.price,
                    displayPrice: `$${addComa(item.price, 3)}`,
                    name: item.name,
                    label: item.label,
                };

                const cart = {
                    quantity: 0,
                    price: item.price,
                    displayPrice: `$${addComa(item.price, 3)}`,
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

export const addToCart = (items, item, cart, totalCost, totalCostDisplay) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        clonedItems.get(item.name).quantity -= 1;
        if (clonedItems.get(item.name).quantity < 0) {
            clonedItems.get(item.name).quantity = 0;
        } else {
            clonedCart.get(item.name).quantity++;
        }

        totalCost = item.price + totalCost;
        const data = {
            totalCost: totalCost,
            totalCostDisplay: `${addComa(totalCost, 3)}`,
            cart: clonedCart,
            items: clonedItems,
        };

        dispatch({
            type: ADD_TO_CART,
            payload: data,
        });
    };
};

export const removeFromCart = (
    items,
    item,
    cart,
    totalCost,
    totalCostDisplay
) => {
    return (dispatch) => {
        let clonedItems = new Map(items);
        let clonedCart = new Map(cart);

        clonedCart.get(item.name).quantity -= 1;
        if (clonedCart.get(item.name).quantity < 0) {
            clonedCart.get(item.name).quantity = 0;
        } else {
            clonedItems.get(item.name).quantity++;
        }

        totalCost = totalCost - item.price;
        const data = {
            totalCost: totalCost,
            totalCostDisplay: `${addComa(totalCost, 3)}`,
            cart: clonedCart,
            items: clonedItems,
        };

        dispatch({
            type: REMOVE_FROM_CART,
            payload: data,
        });
    };
};

const addComa = (num, per) => {
    let aComma = "";
    let count = 0;
    let cWhole = num.toString();

    if (cWhole.length > per) {
        for (let i = cWhole.length - 1; i >= 0; i--) {
            aComma = cWhole.charAt(i) + aComma;
            count++;
            if (count == per && i != 0) {
                aComma = "," + aComma;
                count = 0;
            }
        }
    }
    return aComma;
};