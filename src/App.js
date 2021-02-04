import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "./components/Body";
import Listener from "./containers/Listener";

const useStyles = makeStyles((theme) => ({
    "@global": {},

    gangContainer: {
        display: "none",
    },
}));

export default function App() {
    // const classes = useStyles();
    // const dispatch = useDispatch();

    return (
        <Fragment>
            <Listener />
            <Body />
        </Fragment>
    );
}
