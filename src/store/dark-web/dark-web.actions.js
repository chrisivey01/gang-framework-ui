import Apis from "../../services/api";
import character from "../../helpers/character.json";

export const LOAD_WEB = "LOAD_WEB";
export const LOAD_WEB_SUCCESS = "LOAD_WEB_SUCCESS";
export const LOAD_WEB_FAILURE = "LOAD_WEB_FAILURE";
export const CLOSE_WEB = "CLOSE_WEB";

//this one here holds character information 
export const loadWeb = (data) => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadWebSuccess());
        } else {
            if (data) {
                dispatch(loadWebSuccess(data));
            } else {
                dispatch(loadWebFailure());
            }
        }
    };
};

export const loadWebSuccess = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_WEB_SUCCESS,
            payload: data,
        });
    };
};

export const loadWebFailure = () => {
    return (dispatch) => {
        dispatch({
            type: LOAD_WEB_FAILURE,
            payload: "Some dirty message",
        });
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
