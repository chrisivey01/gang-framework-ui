import Apis from "../../services/api";

export const UPDATE_PANEL = "UPDATE_PANEL";

export const SHOW_WAR_PROMPT = "SHOW_WAR_PROMPT";
export const CLOSE_WAR_PROMPT = "CLOSE_WAR_PROMPT";
export const ACCEPT_WAR_PROMPT = "ACCEPT_WAR_PROMPT";

export const GET_WAR_REQUEST = "GET_WAR_REQUEST";
export const ACCEPT_WAR_REQUEST = "ACCEPT_WAR_REQUEST";


export const updatePanel = (gangKey, gangText) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_PANEL, payload: { gangKey, gangText } });
    };
};

export const showWarPrompt = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_WAR_PROMPT });
    };
};

export const closeWarPrompt = () => {
    return (dispatch) => {
        Apis.closeWarPrompt();
        dispatch({ type: CLOSE_WAR_PROMPT });
    };
};

export const acceptWarPrompt = (character, gangName) => {
    return (dispatch) => {
        const data = {
            from: character.current_gang,
            to: gangName,
        };
        Apis.warRequest(data);
        dispatch({ type: CLOSE_WAR_PROMPT });
    };
};

export const sendWarPrompt = (character, gangText, warForm) => {
    return (dispatch) => {
        const data = {
            ownGang: character.current_gang,
            enemyGang: gangText,
            warForm: warForm,
        };
        Apis.sendWarPrompt(data);
        dispatch({ type: CLOSE_WAR_PROMPT });
    };
};

export const getWarRequest = (enemyGang, ownGang, warForm) => {
    return (dispatch) => {
        const data = {
            from: enemyGang,
            to: ownGang,
            warForm: warForm,
        };
        dispatch({ type: GET_WAR_REQUEST, payload: data });
    };
};

export const acceptWarRequest = (gangWar, gangs) => {
    return (dispatch) => {
        const data = {
            from: gangs[gangWar.gangFrom],
            to: gangs[gangWar.gangTo],
            warForm: gangWar.warForm,
        };
        Apis.acceptWarRequest(data);
        dispatch({ type: CLOSE_WAR_PROMPT });
    };
};

