import gangJson from "../../helpers/gang.json";
import Apis from "../../services/api";

export const LOAD_ROSTERS = "LOAD_ROSTERS";
export const LOAD_ROSTERS_FAILURE = "LOAD_ROSTERS_FAILURE";
export const LOAD_ROSTERS_SUCCESS = "LOAD_ROSTERS_SUCCESS";
export const VIEW_MEMBER = "VIEW_MEMBER";
export const CHANGE_RANK = "CHANGE_RANK";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const UPDATE_BACKSTORY = "UPDATE_BACKSTORY";

export const EXCOMMUNICADO_PROMPT_SHOW = "EXCOMMUNICADO_PROMPT_SHOW";
export const EXCOMMUNICADO_PROMPT_HIDE = "EXCOMMUNICADO_PROMPT_HIDE";
export const EXCOMMUNICADO_PROMPT_SUCCESS = "EXCOMMUNICADO_PROMPT_SUCCESS";

export const SHOW_GANG_INVITE = "SHOW_GANG_INVITE";
export const JOIN_GANG = "JOIN_GANG";
export const DENY_GANG = "DENY_GANG";

export const loadRosters = (roster, character, gangs, gangCap) => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "development") {
            try {
                const data = {
                    roster: gangJson.gang.members,
                    character: gangJson.character,
                    gangs: gangJson.gangs,
                    gangCap: gangJson.gangCap,
                };

                dispatch({ type: LOAD_ROSTERS_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: LOAD_ROSTERS_FAILURE });
            }
        } else {
            try {
                gangs[character["current_gang"]]["calendar"] = gangs[
                    character["current_gang"]
                ]["calendar"].filter((g) => g !== null);
                const data = {
                    roster: roster,
                    character: character,
                    gangs: gangs,
                    gangCap: gangCap,
                };
                dispatch({ type: LOAD_ROSTERS_SUCCESS, payload: data });
            } catch (e) {
                dispatch({ type: LOAD_ROSTERS_FAILURE });
            }
        }
    };
};

export const viewMember = (data) => {
    return (dispatch) => {
        dispatch({ type: VIEW_MEMBER, payload: data });
    };
};

export const updateCharacter = (roster, character) => {
    return (dispatch) => {
        const data = { roster: roster, character: character };
        Apis.updateCharacter(data);
        dispatch({ type: UPDATE_CHARACTER, payload: data });
    };
};

export const excommunicadoPromptShow = () => {
    return (dispatch) => {
        dispatch({ type: EXCOMMUNICADO_PROMPT_SHOW });
    };
};

export const excommunicadoPromptHide = () => {
    return (dispatch) => {
        dispatch({ type: EXCOMMUNICADO_PROMPT_HIDE });
    };
};

export const excommunicadoPromptSuccess = (roster, character) => {
    return (dispatch) => {
        roster = roster.filter(
            (member) => member.char_name !== character.char_name
        );
        const data = { roster: roster, character: character };
        if (process.env.NODE_ENV === "production") {
            Apis.excommunicadoMember(data).then(() => {
                dispatch({
                    type: EXCOMMUNICADO_PROMPT_SUCCESS,
                    payload: data,
                });
                //go back to leader
                dispatch(viewMember(roster[0]));
            });
        } else {
            console.log("Success!");
            dispatch({ type: EXCOMMUNICADO_PROMPT_SUCCESS, payload: roster });
            //go back to leader
            dispatch(viewMember(roster[0]));
        }
    };
};

export const updateBackstory = (character, roster, event) => {
    return (dispatch) => {
        let copyRoster = [...roster];
        let copyCharacter = { ...character };

        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.backstory = event.target.value;
                copyCharacter.backstory = event.target.value;
                return char;
            } else {
                return char;
            }
        });

        const data = {
            roster: copyRoster,
            character: copyCharacter,
        };
        dispatch({ type: UPDATE_CHARACTER, payload: data });
    };
};

export const showGangInvite = (gangName) => {
    return (dispatch) => {
        dispatch({ type: SHOW_GANG_INVITE, payload: gangName });
    };
};

//TODO
export const joinGang = (gangName) => {
    return (dispatch) => {
        //character and roster need to be added to cache
        if (process.env.NODE_ENV === "production") {
            Apis.joinGang(gangName).then(() => {
                dispatch({ type: JOIN_GANG });
            })
        } else {
            dispatch({ type: JOIN_GANG });
        }
    };
};

export const denyGang = () => {
    return (dispatch) => {
        if (process.env.NODE_ENV === "production") {
            dispatch({ type: DENY_GANG });
        } else {
            dispatch({ type: DENY_GANG });
        }
        Apis.closeGangInvite();
    };
};

// const closeGangInvite = (joinOrNo) => {

// };
