import axios from "axios";
import events from "../../helpers/calendar.json";
import Apis from "../../services/api";

export const GET_EVENTS = "GET_EVENTS";
export const CREATE_EVENT = "CREATE_EVENT";
export const SELECT_EVENT = "SELECT_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const SELECT_RANGE = "SELECT_RANGE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

//for testing i have calendar.json
//you need to do var date = new Date() object and get
//date.getTime() to get time in ms, then convert with moment() library
export const getEvents = (gameEvents) => {
    return async (dispatch) => {
        try {
            let response;
            if (process.env.NODE_ENV !== "development") {
                response = gameEvents.map((events) => {
                    if (events) {
                        events.start = new Date(events.start);
                        events.end = new Date(events.end);
                        return events;
                    }
                });
                dispatch({ type: GET_EVENTS, payload: response });
            } else {
                response = events;
                dispatch({ type: GET_EVENTS, payload: response.data });
            }
        } catch (e) {
            console.log(e);
        }
    };
};
export const createEvent = (data) => {
    return async (dispatch) => {
        try {
            if (process.env.NODE_ENV !== "development") {
                await Apis.createCalendarEvents(data);
                dispatch({ type: CREATE_EVENT, payload: data });
            } else {
                dispatch({ type: CREATE_EVENT, payload: data });
            }
        } catch (e) {
            console.log(e);
        }
    };
};

export const selectEvent = (eventId) => {
    return (dispatch) => {
        dispatch({ type: SELECT_EVENT, payload: parseInt(eventId) });
    };
};

export const updateEvent = (eventId, update) => {
    return async (dispatch) => {
        try {
            if (process.env.NODE_ENV !== "development") {
                //this needs ID to identify the event
                update.id = eventId;
                await Apis.updateCalendarEvents({ eventId, update });
                dispatch({ type: UPDATE_EVENT, payload: { eventId, update } });
            } else {
                dispatch({ type: UPDATE_EVENT, payload: data });
            }
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteEvent = (eventId) => {
    return async (dispatch) => {
        try {
            if (process.env.NODE_ENV !== "development") {
                await Apis.deleteCalendarEvents(eventId);
                dispatch({ type: DELETE_EVENT, payload: eventId });
            } else {
                dispatch({ type: DELETE_EVENT, payload: data });
            }
            // await axios.post("/api/calendar/events/remove", {
            //     eventId,
            // });

            // dispatch({ type: DELETE_EVENT, payload: eventId });
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
