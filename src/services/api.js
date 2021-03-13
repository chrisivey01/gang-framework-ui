import axios from "axios";
import character from "../helpers/character.json";
const openDarkWebUrl = "http://pma-gang-framework/OpenDarkWeb";
const closeDarkWebUrl = "http://pma-gang-framework/CloseDarkWeb";
const updateCharacterUrl = "http://pma-gang-framework/UpdateGangCharacter";
const excommunicadoUrl = "http://pma-gang-framework/ExcommunicadoMember";

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
};

export default Apis;
