import { UPDATE_PANEL } from "./war.actions"

const initialState = {
    panel:1
}

export const warReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_PANEL: 
            return {
                ...state,
                panel: action.payload
            }
        default:
            return state;
    }
}