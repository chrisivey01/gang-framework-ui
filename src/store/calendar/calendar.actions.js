import axios from "axios";

export const GET_EVENTS = "GET_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const SELECT_EVENT = "SELECT_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const SELECT_RANGE = "SELECT_RANGE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const getEvents = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("/api/calendar/events");
            dispatch({ type: GET_EVENTS, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const createEvent = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/calendar/events/new", data);
            dispatch({ type: CREATE_EVENT, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const selectEvent = (eventId) => {
    dispatch({ type: SELECT_EVENT, payload: eventId });
};

export const updateEvent = (eventId, update) => {
    return async (dispatch) => {
        try {
            const response = await axios.post("/api/calendar/events/update", {
                eventId,
                update,
            });

            dispatch({ type: UPDATE_EVENT, payload: response.data });
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteEvent = async (eventId) => {
    return async (dispatch) => {
        try {
            await axios.post("/api/calendar/events/remove", {
                eventId,
            });

            dispatch({ type: DELETE_EVENT, payload: eventId });
        } catch (e) {
            console.log(e);
        }
    };
};

export const selectRange = (start, end) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_RANGE,
            payload: { start: start.getTime(), end: end.getTime() },
        });
    };
};

export const openModal = () => {
    return (dispatch) => {
        dispatch({ type: OPEN_MODAL });
    };
};

export const closeModal = () => {
    return (dispatch) => {
        dispatch({ type: CLOSE_MODAL });
    };
};
