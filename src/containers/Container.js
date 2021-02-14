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

const drawerWidth = 200;

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
            color: "white",
            backgroundColor: "rgba(0,0,0,0.85)",
            "& .title-bar": {
                "& .box-wrapper": {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                    justifyContent: "center",
                    padding: "15px 15px",
                    bottom: 0,
                    "&:hover": {
                        color: "#007aac",
                    },
                    "& svg": {
                        paddingLeft: 8,
                        paddingRight: 8,
                        width: 30,
                    },
                },
            },
        },

        // "& .wrapper": {
        //     display: "flex",
        //     height: "700px",
        //     width: "100%",

        //     "& .drawer": {
        //         width: drawerWidth,
        //         overflow: "auto",
        //         "& .MuiDrawer-paper": {
        //             position: "unset",
        //             backgroundColor: "rgba(0, 0, 0, 0.65)",
        //             color: "rgb(227,227,227)",
        //         },

        //         "& .MuiListItem-button:hover": {
        //             backgroundColor: "rgba(0, 0, 0, 0.15)",
        //         },
        //     },

        //     "& .content": {
        //         width: "100%",
        //         position: "relative",
        //         backgroundColor: "rgba(0,0,0, 0.65)",
        //     },
        // },
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
                                    className="button"
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
                                <Typography noWrap={true}  variant="h6">Dark Web</Typography>
                            </Grid>
                            <Grid justify="flex-end" container>
                                <Title />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    <div className="content">{props.children}</div>
                </div>
            )}
        </Fragment>
    );
};
