import { combineReducers } from "redux";
import { characterReducer } from "../store/character/character.reducer";

export default combineReducers({
    character: characterReducer,
});
