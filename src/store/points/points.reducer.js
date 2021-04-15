import { ACTIVE_WAR, END_WAR } from "./points.actions";

const initialState = {
    activeWar: false,
    warData: {
        gang_id1: 0,
        gang_name1: "",
        gang_id2: 0,
        gang_name2: "",
        score1: 0,
        score2: 0,
        max: 0,
    },
};

export const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_WAR:
            return {
                ...state,
                activeWar: action.payload.activeWar,
                warData: action.payload.warData,
            };
        case END_WAR:
            return {
                ...state,
                activeWar: false,
                warData: action.payload.warData,
            };
        default:
            return state;
    }
};
