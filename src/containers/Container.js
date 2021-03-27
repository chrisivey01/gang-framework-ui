import {
    AppBar,
    Box,
    Grid,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";
import { default as Title } from "../components/Title";
import Listener from "./Listener";

const useStyles = makeStyles((theme) => ({
    showContainer: {
        position: "relative",
        top: "90px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        width: "80%",

        "& .app-bar": {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            backgroundColor: "#333",
            minWidth: "790px",

            "& .title-bar": {
                "& .wrapper": {
                    minHeight: "100%",
                    display: "flex",
                },
            },
        },

        "& .container": {
            height: 645,
            backgroundColor: "#212121",
            color: "#fff",
            padding: 30,
            minWidth: "790px",

            "& .wrapper": {
                display: "flex",
                width: "100%",
            },
        },
    },
    hideContainer: {
        display: "none",
    },
}));

export default (props) => {
    const classes = useStyles();
    const showWeb = useSelector((state) => state.darkWeb.showWeb);
    const character = useSelector((state) => state.darkWeb.characterData);

    const renderEnvironment = () => {
        if (process.env.NODE_ENV !== "development") {
            return (
                <div
                    className={
                        showWeb ? classes.showContainer : classes.hideContainer
                    }
                >
                    <Listener />
                    <AppBar position="static" className="app-bar">
                        <Toolbar className="title-bar">
                            <Grid>
                                <Typography noWrap={true} variant="h6">
                                    Dark Web
                                </Typography>
                            </Grid>
                            <Grid
                                className="wrapper"
                                justify="flex-end"
                                container
                            >
                                <Box className="wrapper">
                                    <Title />
                                    <LogoutButton />
                                </Box>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container className="container">
                        <Grid className="wrapper">{props.children}</Grid>
                    </Grid>
                </div>
            );
        } else {
            return (
                <div
                    className={
                        showWeb ? classes.showContainer : classes.hideContainer
                    }
                >
                    <Listener />
                    <AppBar position="static" className="app-bar">
                        <Toolbar className="title-bar">
                            <Grid>
                                <Typography noWrap={true} variant="h6">
                                    Dark Web
                                </Typography>
                            </Grid>
                            <Grid
                                className="wrapper"
                                justify="flex-end"
                                container
                            >
                                <Box className="wrapper">
                                    <Title />
                                    <LogoutButton />
                                </Box>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container className="container">
                        <Grid className="wrapper">{props.children}</Grid>
                    </Grid>
                </div>
            );
        }
    };

    //If development it will not use the ternary and wait for the postMessage
    //It will just open the UI immediately with the JSON required.
    return <Fragment>{renderEnvironment()}</Fragment>;
};
