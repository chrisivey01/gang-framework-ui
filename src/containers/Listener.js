import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCharacterDetails } from "../store/character/character.actions";

export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("message", (event) => loadDarkWeb(event));
        return () => {
            window.removeEventListener("message", (event) =>
                loadDarkWeb(event)
            );
        };
    }, []);

    const loadDarkWeb = (event) => {
        if (process.env.NODE_ENV === "development") {
            switch (event.data.loadDarkWeb) {
                case "showDarkWeb": {
                    dispatch(loadCharacterDetails());
                }
            }
        } else {
            switch (event.data.loadDarkWeb) {
                case "showDarkWeb": {
                    dispatch(loadCharacterDetails(event.data.character));
                }
            }
        }
    };

    const loadDevelopment = () => {};

    return <Fragment />;
};
