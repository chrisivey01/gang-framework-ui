import {
    UPDATE_CHARACTER,
    LOAD_ROSTERS_FAILURE,
    LOAD_ROSTERS_SUCCESS,
    VIEW_MEMBER,
    VIEW_GANG_MEMBER,
    EXCOMMUNICADO_PROMPT_SHOW,
    EXCOMMUNICADO_PROMPT_HIDE,
    EXCOMMUNICADO_PROMPT_SUCCESS,
    SHOW_GANG_INVITE,
    JOIN_GANG,
    DENY_GANG,
} from "./gang.actions";

const initialState = {
    gangCap: 0,
    roster: [],
    character: {},
    gangMember: {},
    gangs: {},
    showDialog: false,
    invite: {
        show: false,
        name: "",
    },
};

export const gangReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ROSTERS_SUCCESS:
            return {
                ...state,
                roster: action.payload.roster,
                character: action.payload.character,
                gangCap: action.payload.gangCap,
                gangs: action.payload.gangs,
            };
        case LOAD_ROSTERS_FAILURE:
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
                gangMember: action.payload,
            };
        case UPDATE_CHARACTER:
            return {
                ...state,
                roster: action.payload.roster,
                gangMember: action.payload.character,
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
                roster: action.payload,
                showDialog: false,
            };
        case SHOW_GANG_INVITE:
            return {
                ...state,
                invite: {
                    show: true,
                    name: action.payload,
                },
            };
        case JOIN_GANG:
            return {
                ...state,
                invite: {
                    ...state.invite,
                    show: false,
                },
            };
        case DENY_GANG:
            return {
                ...state,
                gangInvite: false,
                invite: {
                    ...state.invite,
                    show: false,
                    name: "",
                },
            };

        default:
            return state;
    }
};
