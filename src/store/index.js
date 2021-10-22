import {applyMiddleware, combineReducers, createStore} from "redux";
import {webReducer} from "../store/web/web.reducer";
import {calendarReducer} from "./calendar/calendar.reducer";
import {gangReducer} from "./gang/gang.reducer";
import {storeReducer} from "./web-store/store.reducer";
import {warReducer} from "./war/war.reducer";
import {pointsReducer} from "./points/points.reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    web: webReducer,
    store: storeReducer,
    gang: gangReducer,
    calendar: calendarReducer,
    war: warReducer,
    points: pointsReducer,
});

const middlewareEnhancer = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, middlewareEnhancer)
// combineReducers, applyMiddleware(...middleware));
