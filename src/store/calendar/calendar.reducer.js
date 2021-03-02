import {
    GET_EVENTS,
    CREATE_EVENT,
    SELECT_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    SELECT_RANGE,
    OPEN_MODAL,
    CLOSE_MODAL,
} from "./calendar.actions";
const initialState = {
    events: [],
    isModalOpen: false,
    selectedEventId: null,
    selectedRange: null,
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case SELECT_EVENT:
            return {
                ...state,
                isModalOpen: true,
                selectedEventId: selectedEventId,
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events:  _.map(state.events, (_event) => {
                    if (_event.id === action.payload.id) {
                        return action.payload;
                    }
    
                    return _event;
                })
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: _.reject(state.events, { id: action.payload.eventId })
            };
        case SELECT_RANGE:
            return {
                ...state,
                isModalOpen: true,
                selectedRange: {start: action.payload.start, end: action.payload.end}
            };
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                selectedEventId: null,
                selectedRange: null
            };
        default:
            return state;
    }
};
