import Apis from "../../services/api";
import character from "../../../helpers/character.json";
export const LOAD_CHARACTER_DETAILS = "LOAD_CHARACTER_DETAILS";
export const LOAD_CHARACTER_DETAILS_SUCCESS = "LOAD_CHARACTER_DETAILS_SUCCESS";
export const LOAD_CHARACTER_DETAILS_FAILURE = "LOAD_CHARACTER_DETAILS_FAILURE";

export const loadCharacterDetails = (data) => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadCharacterDetailsSuccess(character));
        } else {
            Apis.openDarkWeb()
                .then((results) =>
                    dispatch(loadCharacterDetailsSuccess(results))
                )
                .catch(() => dispatch(loadCharacterDetailsFailure()));
        }
    };
};

export const loadCharacterDetailsSuccess = (data) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_CHARACTER_DETAILS_SUCCESS,
            payload: data,
        });
    };
};

export const loadCharacterDetailsFailure = () => {
    return (dispatch) => {
        dispatch({
            type: LOAD_CHARACTER_DETAILS_FAILURE,
            payload: "Some dirty message",
        });
    };
};
