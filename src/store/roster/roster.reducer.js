import {
    CHANGE_RANK,
    LOAD_ROSTER_FAILURE,
    LOAD_ROSTER_SUCCESS,
    VIEW_MEMBER,
} from "./roster.actions";

const initialState = {
    roster: [],
    character: {},
};

export const rosterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROSTER_SUCCESS:
            return {
                ...state,
                roster: action.payload,
            };
        case LOAD_ROSTER_FAILURE:
            return {
                ...state,
                errorMessage: {
                    ...state.errorMessage,
                    message: action.payload,
                    showToggle: true,
                },
            };
        case VIEW_MEMBER:
            return {
                ...state,
                character: action.payload,
            };
        case CHANGE_RANK:
            return {
                ...state,
                roster: action.payload,
            };
        default:
            return state;
    }
};
