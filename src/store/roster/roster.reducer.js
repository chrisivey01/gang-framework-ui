import {
    UPDATE_CHARACTER,
    LOAD_ROSTER_FAILURE,
    LOAD_ROSTER_SUCCESS,
    VIEW_MEMBER,
    EXCOMMUNICADO_PROMPT_SHOW,
    EXCOMMUNICADO_PROMPT_HIDE,
    EXCOMMUNICADO_PROMPT_SUCCESS,
    SHOW_GANG_INVITE,
    JOIN_GANG,
    DENY_GANG,
} from "./roster.actions";

const initialState = {
    gangCap: 0,
    roster: [],
    character: {},
    showDialog: false,
    gangInvite: false,
};

export const rosterReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROSTER_SUCCESS:
            return {
                ...state,
                roster: action.payload.roster,
                gangCap: action.payload.gangCap,
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
        case UPDATE_CHARACTER:
            return {
                ...state,
                roster: action.payload.roster,
                character: action.payload.character,
            };
        case EXCOMMUNICADO_PROMPT_SHOW:
            return {
                ...state,
                showDialog: true,
            };
        case EXCOMMUNICADO_PROMPT_HIDE:
            return {
                ...state,
                showDialog: false,
            };
        case EXCOMMUNICADO_PROMPT_SUCCESS:
            return {
                ...state,
                roster: action.payload.roster,
                showDialog: false,
            };
        case SHOW_GANG_INVITE:
            return {
                ...state,
                gangInvite: true,
            };
        case JOIN_GANG:
            return {
                ...state,
                gangInvite: false,
                // roster: action.payload,
            };
        case DENY_GANG:
            return {
                ...state,
                gangInvite: false,
                // roster: action.payload,
            };

        default:
            return state;
    }
};
