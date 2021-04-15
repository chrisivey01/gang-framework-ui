export const ACTIVE_WAR = "ACTIVE_WAR";
export const END_WAR = "END_WAR";

export const activeWar = (data) => {
    return (dispatch) => {
        dispatch({ type: ACTIVE_WAR, payload: data });
    };
};

export const endWar = () => {
    return (dispatch) => {
        dispatch({ type: END_WAR });
    };
};