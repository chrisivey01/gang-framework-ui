import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "../helpers/weapons.json";
import { loadWeb } from "../store/web/web.actions";
import { loadRosters, showGangInvite } from "../store/roster/roster.actions";
import { loadStore } from "../store/web-store/store.actions";
import { getEvents } from "../store/calendar/calendar.actions";
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

    useEffect(() => {
        window.addEventListener("message", (event) =>
            gangInviteListener(event)
        );
        return () => {
            window.removeEventListener("message", (event) =>
                gangInviteListener(event)
            );
        };
    }, []);

    //launches on startup currently
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            window.postMessage({ darkWeb: "open" });
        }
    }, []);

    const gangInviteListener = (event) => {
        if (event.data.showGangInvite) {
            dispatch(showGangInvite(event.data.gangName));
        }
    };

    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            dispatch(loadStore(data));
        } else {
            dispatch(loadStore(data));
        }
    }, []);

    const actionListener = (event) => {
        if (event.data.darkWeb) {
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
                            event.data.gangs[
                                event.data.character["current_gang"]
                            ]["calendar"]
                        )
                    );

                default:
                    null;
            }
        }
    };

    return <Fragment />;
};
