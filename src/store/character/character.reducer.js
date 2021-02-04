import {
    LOAD_CHARACTER_DETAILS_SUCCESS,
    LOAD_CHARACTER_DETAILS_FAILURE,
} from "./character.actions";

const initialState = {
    characterData: {
        gang: "",
        characterName: "",
        gangRank: "",
        phoneNumber: "",
        radioChannel: "",
    },
    errorMessage: {
        message: "",
        showToggle: false,
    },
};

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CHARACTER_DETAILS_SUCCESS:
            return {
                ...state,
                characterData: action.payload,
            };
        case LOAD_CHARACTER_DETAILS_FAILURE:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.payload,
                    showToggle: true,
                },
            };
        default:
            return state;
    }
};

// export characterReducer;
