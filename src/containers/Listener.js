import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadWeb, closeWeb } from "../store/dark-web/dark-web.actions";

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
                        dispatch(loadWeb(event.data.character));
                    }
                }
                break;
            case "close":
                dispatch(closeWeb());
                break;
            default:
                null;
        }
    };

    return <Fragment />;
};
