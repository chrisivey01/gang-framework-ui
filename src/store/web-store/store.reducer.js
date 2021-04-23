import {
    ADD_TO_CART,
    LOAD_STORE,
    LOAD_STORE_FAILURE,
    LOAD_STORE_SUCCESS,
    PURCHASE_WEAPONS,
    REMOVE_FROM_CART,
} from "./store.actions";

const initialState = {
    loading: false,
    items: [],
    cart: new Map(),
    amountOfWeapons: 0,
    errorMessage: {
        message: "",
        showToggle: false,
    },
};

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STORE: {
            return {
                ...state,
                loading: true,
            };
        }
        case LOAD_STORE_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                cart: action.payload.cart,
                loading: false,
            };
        case LOAD_STORE_FAILURE:
            return {
                ...state,
                error: true,
                loading: false,
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: action.payload.cart,
                items: action.payload.items,
                amountOfWeapons: action.payload.amountOfWeapons
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload.cart,
                items: action.payload.items,
                amountOfWeapons: action.payload.amountOfWeapons
            };
        case PURCHASE_WEAPONS:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }
};
