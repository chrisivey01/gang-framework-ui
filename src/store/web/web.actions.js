import Apis from "../../services/api";

export const LOAD_WEB = "LOAD_WEB";
export const CLOSE_WEB = "CLOSE_WEB";

//this one here holds character information
export const loadWeb = () => {
    return (dispatch) => {
        dispatch({ type: LOAD_WEB });
    };
};

export const closeWeb = () => {
    return (dispatch) => {
        Apis.closeDarkWeb().then(() =>
            dispatch({
                type: CLOSE_WEB,
            })
        );
    };
};
