import axios from "axios";
import character from "../../helpers/character.json";
const openDarkWebUrl = "http://pma-gang-framework/OpenDarkWeb";

const Apis = {
    openDarkWeb(data) {
        if (process.env.NODE_ENV === "development") {
            return character;
        } else {
            return axios.post(openDarkWebUrl, data);
        }
    },
};

export default Apis;
