import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../helpers/weapons.json";
import warRequest from "../helpers/warRequest.json";
import war from "../helpers/war.json";
import { loadWeb } from "../store/web/web.actions";
import { loadRosters, showGangInvite } from "../store/gang/gang.actions";
import { loadStore } from "../store/web-store/store.actions";
import { getEvents } from "../store/calendar/calendar.actions";
import { getWarRequest } from "../store/war/war.actions";
import { activeWar, endWar } from "../store/points/points.actions";
export default () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.store.items);

    useEffect(() => {
        window.addEventListener("message", (event) => actionListener(event));
        return () => {
            window.removeEventListener("message", (event) =>
                actionListener(event)
            );
        };
    }, []);

    //launches on startup currently
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            openStore();
            // openWarRequest();
            // openWarScore(event);
        }
    }, []);

    const openStore = () => {
        window.postMessage({ darkWeb: "open" });
    };

    const openWarRequest = () => {
        window.postMessage(warRequest);
    };

    const openWarScore = () => {
        window.postMessage(war);
    };

    const gangInviteListener = (event) => {
        if (event.data.showGangInvite) {
            dispatch(showGangInvite(event.data.gangName));
        }
    };

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadStore(data));
            dispatch(loadRosters());
        }
    }, []);

    const actionListener = (event) => {
        switch (event.data.darkWeb) {
            case "open":
                if (process.env.NODE_ENV === "development") {
                    if (event.data.darkWeb) {
                        document.querySelector("#blur").style =
                            "position: absolute; height: 100%;width: 100%;filter: blur(200px);background-color: rgba(0, 0, 0, 0.8);bottom: 0;left: 0; display:block;";
                        dispatch(loadWeb());
                        dispatch(loadRosters(event.data.roster));
                    }
                } else {
                    if (event.data.darkWeb) {
                        document.querySelector("#blur").style =
                            "position: absolute; height: 100%;width: 100%;filter: blur(200px);background-color: rgba(0, 0, 0, 0.8);bottom: 0;left: 0; display:block;";
                        dispatch(loadWeb());
                        dispatch(
                            loadRosters(
                                event.data.gang.members,
                                event.data.character,
                                event.data.gangs,
                                event.data.gangCap
                            )
                        );
                        dispatch(loadStore(event.data.gang.weapons));
                        dispatch(
                            getEvents(
                                event.data.gangs[
                                    event.data.character["current_gang"]
                                ]["calendar"]
                            )
                        );
                    }
                }
                break;
            case "update":
                dispatch(
                    loadRosters(
                        event.data.gang.members,
                        event.data.character,
                        event.data.gangs,
                        event.data.gangCap
                    )
                );
                dispatch(
                    getEvents(
                        event.data.gangs[event.data.character["current_gang"]][
                            "calendar"
                        ]
                    )
                );
                break;
            case "warRequest":
                dispatch(
                    getWarRequest(
                        event.data.enemyGang,
                        event.data.ownGang,
                        event.data.warForm
                    )
                );
                break;
            default:
                null;
        }

        switch (event.data.activeWar) {
            case true:
                dispatch(activeWar(event.data));
                break;
            case false:
                dispatch(endWar());
                break;
            default:
                null;
        }

        switch (event.data.showGangInvite) {
            case true:
                dispatch(showGangInvite(event.data.gangName));
                break;
            default:
                null;
        }
    };

    return <Fragment />;
};
