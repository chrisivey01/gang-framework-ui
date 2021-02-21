import axios from "axios";
import character from "../helpers/character.json";
const openDarkWebUrl = "http://pma-gang-framework/OpenDarkWeb";
const closeDarkWebUrl = "http://pma-gang-framework/CloseDarkWeb";

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
};

export default Apis;
