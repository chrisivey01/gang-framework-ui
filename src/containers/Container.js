import {
    AppBar,
    Box,
    Grid,
    makeStyles,
    Toolbar,
    Typography,
    Fade,
} from "@material-ui/core";
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
        zIndex: 1,

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
            height: "inherit",
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
    const showWeb = useSelector((state) => state.web.showWeb);

    //If development it will not use the ternary and wait for the postMessage
    //It will just open the UI immediately with the JSON required.
    return (
        <Fade in={showWeb} timeout={(1000, 1000)}>
            <div className={classes.showContainer}>
                <Listener />
                <AppBar position="static" className="app-bar">
                    <Toolbar className="title-bar">
                        <Grid>
                            <Typography noWrap={true} variant="h6">
                                Dark Web
                            </Typography>
                        </Grid>
                        <Grid className="wrapper" justify="flex-end" container>
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
        </Fade>
    );
};
