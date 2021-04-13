import {
    ACCEPT_WAR_REQUEST,
    ACTIVE_WAR,
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
        show: false,
    },
    activeWar: false,
    warData: {
        gang_id1: 0,
        gang_name1: "",
        gang_id2: 0,
        gang_name2: "",
        points: {
            score1: 0,
            score2: 0,
            max: 0,
        },
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
        case ACTIVE_WAR:
            return {
                ...state,
                activeWar: action.payload.activeWar,
                warData: action.payload.warData,
            };
        case END_WAR:
            return {
                ...state,
                activeWar: false,
                warData: action.payload.warData,
            };
        default:
            return state;
    }
};
