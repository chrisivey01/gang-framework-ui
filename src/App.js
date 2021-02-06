import "@fontsource/roboto";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import { Fragment } from "react";
import Body from "./components/Body";
import Listener from "./containers/Listener";
import { HashRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    "@global": {},

    gangContainer: {
        display: "none",
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "rgba(0,0,0,.87)",
        },
        textPrimary: {
            main: "white",
        },
    },
});
export default function App() {
    // const classes = useStyles();
    // const dispatch = useDispatch();

    return (
        <Fragment>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <Listener />
                    <Body />
                </ThemeProvider>
            </HashRouter>
        </Fragment>
    );
}
