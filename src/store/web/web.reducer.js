import { CLOSE_WEB, LOAD_WEB } from "./web.actions";

const initialState = {
    showWeb: false,
};

export const webReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WEB:
            return {
                ...state,
                showWeb: true,
            };

        case CLOSE_WEB:
            return {
                ...state,
                showWeb: false,
            };
        default:
            return state;
    }
};

// export characterReducer;
