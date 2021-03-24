export const UPDATE_PANEL = "UPDATE_PANEL";

export const updatePanel = (data) => {
    return (dispatch) => {
        dispatch({type: UPDATE_PANEL, payload:data})
    };
};
