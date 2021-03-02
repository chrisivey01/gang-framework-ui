import { combineReducers } from "redux";
import { darkWebReducer } from "../store/dark-web/dark-web.reducer";
import { calendarReducer } from "./calendar/calendar.reducer";
import { rosterReducer } from "./roster/roster.reducer";
import { storeReducer } from "./web-store/store.reducer";

export default combineReducers({
    darkWeb: darkWebReducer,
    store: storeReducer,
    gang: rosterReducer,
    calendar: calendarReducer,
});
