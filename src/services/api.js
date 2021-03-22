import axios from "axios";
import character from "../helpers/character.json";
const openDarkWebUrl = "http://pma-gang-framework/OpenDarkWeb";
const closeDarkWebUrl = "http://pma-gang-framework/CloseDarkWeb";
const updateCharacterUrl = "http://pma-gang-framework/UpdateGangCharacter";
const excommunicadoUrl = "http://pma-gang-framework/ExcommunicadoMember";
const closeGangInviteUrl = "http://pma-gang-framework/CloseGangInvite";

const getCalendarEventsUrl = "http://pma-gang-framework/GetCalendarEvents";
const createCalendarEventsUrl = "http://pma-gang-framework/CreateCalendarEvents";
const updateCalendarEventsUrl = "http://pma-gang-framework/UpdateCalendarEvents";
const deleteCalendarEventsUrl = "http://pma-gang-framework/DeleteCalendarEvents";

const Apis = {
    openDarkWeb(data) {
        if (process.env.NODE_ENV === "development") {
            return character;
        } else {
            return axios.post(openDarkWebUrl, data);
        }
    },

    closeDarkWeb() {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(closeDarkWebUrl, {});
        }
    },

    updateCharacter(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(updateCharacterUrl, data);
        }
    },

    excommunicadoMember(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(excommunicadoUrl, data);
        }
    },

    closeGangInvite(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(closeGangInviteUrl, data);
        }
    },

    getCalendarEvents(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(getCalendarEventsUrl, data);
        }
    },

    createCalendarEvents(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(createCalendarEventsUrl, data);
        }
    },

    updateCalendarEvents(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(updateCalendarEventsUrl, data);
        }
    },

    deleteCalendarEvents(data) {
        if (process.env.NODE_ENV === "development") {
            return true;
        } else {
            return axios.post(deleteCalendarEventsUrl, data);
        }
    }
};

export default Apis;
