import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeWeb, loadWeb } from "../store/dark-web/dark-web.actions";
import { loadRoster } from "../store/roster/roster.actions";

export default () => {
    const dispatch = useDispatch();

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
            window.postMessage({ darkWeb: "open" });
        }
    }, []);

    const actionListener = (event) => {
        switch (event.data.darkWeb) {
            case "open":
                if (process.env.NODE_ENV === "development") {
                    if (event.data.darkWeb) {
                        dispatch(loadWeb());
                    }
                } else {
                    if (event.data.darkWeb) {
                        document.querySelector("#blur").style =
                            "position: absolute; height: 100%;width: 100%;filter: blur(200px);background-color: rgba(0, 0, 0, 0.8);bottom: 0;left: 0; display:block;";
                        dispatch(loadWeb('{}'));
                        dispatch(loadRoster(event.data.roster));
                    }
                }
                break;

            default:
                null;
        }
    };

    return <Fragment />;
};
