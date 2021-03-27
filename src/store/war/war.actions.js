export const UPDATE_PANEL = "UPDATE_PANEL";
export const UPDATE_POINTS = "UPDATE_POINTS";
export const UPDATE_DISPUTE = "UPDATE_DISPUTE";
export const UPDATE_REWARD = "UPDATE_REWARD";
export const SHOW_WAR_PROMPT = "SHOW_WAR_PROMPT";
export const CLOSE_WAR_PROMPT = "CLOSE_WAR_PROMPT";
export const ACCEPT_WAR_PROMPT = "ACCEPT_WAR_PROMPT";

export const updatePanel = (data) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_PANEL, payload: data });
    };
};

export const updatePoints = (data) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_POINTS, payload: data });
    };
};

export const updateDispute = (data) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_DISPUTE, payload: data });
    };
};

export const updateReward = (data) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_REWARD, payload: data });
    };
};

export const showWarPrompt = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_WAR_PROMPT });
    };
};

export const closeWarPrompt = () => {
    return (dispatch) => {
        dispatch({ type: CLOSE_WAR_PROMPT });
    };
};

export const acceptWarPrompt = () => {
    return (dispatch) => {
        dispatch({ type: ACCEPT_WAR_PROMPT });
    };
};
