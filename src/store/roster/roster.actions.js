import data from "../../helpers/gang.json";

export const LOAD_ROSTER = "LOAD_ROSTER";
export const LOAD_ROSTER_FAILURE = "LOAD_ROSTER_FAILURE";
export const LOAD_ROSTER_SUCCESS = "LOAD_ROSTER_SUCCESS";
export const VIEW_MEMBER = "VIEW_MEMBER";
export const CHANGE_RANK = "CHANGE_RANK";

export const loadRoster = () => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            try {
                dispatch({ type: LOAD_ROSTER_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: LOAD_ROSTER_FAILURE });
            }
        } else {
            try {
                // need api call still
                // const data = call()
                dispatch({ type: LOAD_ROSTER_SUCCESS });
            } catch (e) {
                dispatch({ type: LOAD_ROSTER_FAILURE });
            }
        }
    };
};

export const viewMember = (data) => {
    return (dispatch) => {
        dispatch({ type: VIEW_MEMBER, payload: data });
    };
};

export const changeRank = (data) => {
    return (dispatch) => {
        dispatch({ type: CHANGE_RANK, payload: data });
    };
};
