import {
    CLOSE_WAR_PROMPT,
    SHOW_WAR_PROMPT,
    UPDATE_DISPUTE,
    UPDATE_PANEL,
    UPDATE_POINTS,
    UPDATE_REWARD,
} from "./war.actions";

const initialState = {
    panel: 1,
    points: 0,
    dispute: "",
    reward: "",
    showWarPrompt: true,
};

export const warReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PANEL:
            return {
                ...state,
                panel: action.payload,
            };
        case UPDATE_POINTS:
            return {
                ...state,
                points: action.payload,
            };
        case UPDATE_DISPUTE:
            return {
                ...state,
                dispute: action.payload,
            };
        case UPDATE_REWARD:
            return {
                ...state,
                reward: action.payload,
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
            };
        default:
            return state;
    }
};
