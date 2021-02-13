import {
    AppBar,
    Container,
    Drawer,
    makeStyles,
    Toolbar,
    Typography,
    Grid,
    SvgIcon,
    SvgIconProps,
    Box,
} from "@material-ui/core";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";
import Listener from "./Listener";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import swordUrl, { ReactComponent as Sword } from "../../images/sword.svg";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    showContainer: {
        position: "relative",
        top: "30px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        width: "80%",

        "& .appBar": {
            zIndex: theme.zIndex.drawer + 1,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.85)",
            height: "60px",
            "& .titleBar": {
                justifyContent: "space-between",

                "& .box-wrapper": {
                    display: "flex",
                    width: 65,
                },

                "& svg": {
                    paddingLeft: 8,
                    paddingRight: 8,
                },
            },
        },

        "& .wrapper": {
            display: "flex",
            height: "700px",
            width: "100%",

            "& .drawer": {
                width: drawerWidth,
                overflow: "auto",
                "& .MuiDrawer-paper": {
                    position: "unset",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    color: "rgb(227,227,227)",
                },

                "& .MuiListItem-button:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.15)",
                },
            },

            "& .content": {
                width: "100%",
                position: "relative",
                backgroundColor: "rgba(0,0,0, 0.65)",
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
                        <Toolbar className="titleBar">
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
                    <AppBar position="static" className="appBar">
                        <Toolbar className="titleBar">
                            <Grid>
                                <Typography variant="h6">Dark Web</Typography>
                            </Grid>
                            <Grid>
                                <Box className="box-wrapper">
                                    <Sword className="svg" />
                                    <Typography>War</Typography>
                                </Box>
                            </Grid>
                        </Toolbar>
                    </AppBar>

                    <div className="wrapper">
                        <Drawer className="drawer" variant="permanent">
                            <Sidebar />
                        </Drawer>

                        <Container className="content">
                            {props.children}
                        </Container>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
