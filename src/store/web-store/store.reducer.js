import {
    LOAD_STORE,
    LOAD_STORE_SUCCESS,
    LOAD_STORE_FAILURE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from "./store.actions";

const initialState = {
    loading: false,
    items: [],
    cart: [],
    totalCost: 0,
    totalCostDisplay: "0",
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
                totalCost: action.payload.totalCost,
                totalCostDisplay: action.payload.totalCostDisplay
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: action.payload.cart,
                items: action.payload.items,
                totalCost: action.payload.totalCost,
                totalCostDisplay: action.payload.totalCostDisplay
            };
        default:
            return state;
    }
};
