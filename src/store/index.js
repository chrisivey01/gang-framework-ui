import { combineReducers } from "redux";
import { webReducer } from "../store/web/web.reducer";
import { calendarReducer } from "./calendar/calendar.reducer";
import { gangReducer } from "./gang/gang.reducer";
import { storeReducer } from "./web-store/store.reducer";
import { warReducer } from "./war/war.reducer";
export default combineReducers({
    web: webReducer,
    store: storeReducer,
    gang: gangReducer,
    calendar: calendarReducer,
    war: warReducer,
});
