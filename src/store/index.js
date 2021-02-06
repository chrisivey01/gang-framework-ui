import { combineReducers } from "redux";
import { darkWebReducer } from "../store/dark-web/dark-web.reducer";

export default combineReducers({
    darkWeb: darkWebReducer,
});
