import {
    AppBar,
    Box,
    Container,
    Drawer,
    Grid,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";
import Title from "../components/Title";
import Sidebar from "../components/Title";
import Listener from "./Listener";

const useStyles = makeStyles((theme) => ({
    showContainer: {
        position: "relative",
        top: "30px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        
        "& .app-bar": {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
            backgroundColor: "#333",
            "& .title-bar": {
                "& .wrapper": {
                    minHeight: "100%",
                    display: "flex",
                },
            },
        },

        "& .container": {
            height: 750,
            backgroundColor: "#212121",
            color: "#fff",
            "& .wrapper": {
                padding: 30,
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

    //If development it will not use the ternary and wait for the postMessage
    //It will just open the UI immediately with the JSON required.
    return (
        <Fragment>
            {process.env.NODE_ENV !== "development" ? (
                <div
                    className={
                        showWeb ? classes.showContainer : classes.hideContainer
                    }
                >
                    <Listener />
                    <AppBar position="static" className="appBar">
                        <Toolbar disableGutters={false} className="titleBar">
                            <Grid>
                                <Typography variant="h6">Dark Web</Typography>
                            </Grid>
                            <Grid>
                                <Typography
                                    component={LogoutButton}
                                    variant="h6"
                                >
                                    Logout
                                </Typography>
                                <ExitToAppIcon />
                            </Grid>
                        </Toolbar>
                    </AppBar>

                    <Drawer className="drawer" variant="permanent">
                        <Sidebar />
                    </Drawer>
                    <main className="content">{props.children}</main>
                </div>
            ) : (
                <div className={classes.showContainer}>
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
                                </Box>
                                <LogoutButton />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <Grid container className="container">
                        <Box className="wrapper">{props.children}</Box>
                    </Grid>
                </div>
            )}
        </Fragment>
    );
};
