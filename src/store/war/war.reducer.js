import {
    ACCEPT_WAR_REQUEST,
    ACTIVE_WAR,
    CLOSE_PROMPT,
    CLOSE_WAR_PROMPT,
    END_WAR,
    GET_WAR_REQUEST,
    SHOW_WAR_PROMPT,
    UPDATE_PANEL,
} from "./war.actions";

const initialState = {
    gangKey: 1,
    gangText: "",
    points: 0,
    warScore: 0,
    dispute: "",
    reward: "",
    showWarPrompt: false,
    showWarRequest: {
        gangFrom: {},
        gangTo: {},
        warForm: {},
        show: false,
    },
};

export const warReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PANEL:
            return {
                ...state,
                gangKey: action.payload.gangKey,
                gangText: action.payload.gangText,
                points: action.payload.gangKey,
            };
        case SHOW_WAR_PROMPT:
            return {
                ...state,
                showWarPrompt: true,
            };
        case CLOSE_WAR_PROMPT:
            return {
                ...state,
                showWarPrompt: false,
                showWarRequest: false,
            };
        case CLOSE_PROMPT:
            return {
                ...state,
                showWarPrompt: false,
                showWarRequest: false,
            };
        case GET_WAR_REQUEST:
            return {
                ...state,
                showWarRequest: {
                    gangFrom: action.payload.from,
                    gangTo: action.payload.to,
                    show: true,
                    warForm: action.payload.warForm,
                },
            };
        case ACCEPT_WAR_REQUEST:
            return {
                ...state,
                activeWar: action.payload,
            };
        default:
            return state;
    }
};
