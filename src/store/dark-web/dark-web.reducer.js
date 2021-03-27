import { CLOSE_WEB, LOAD_WEB_FAILURE, LOAD_WEB_SUCCESS } from "./dark-web.actions";

const initialState = {
    showWeb: false,
    character: {},
    errorMessage: {
        message: "",
        showToggle: false,
    },
};

export const darkWebReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_WEB_SUCCESS:
            return {
                ...state,
                showWeb: true
            };
        case LOAD_WEB_FAILURE:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.payload,
                    showToggle: true,
                },
            };
        case CLOSE_WEB:
            return {
                ...state,
                showWeb: false
            };
        default:
            return state;
    }
};

// export characterReducer;
