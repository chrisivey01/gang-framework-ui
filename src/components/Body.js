import {
    AppBar,
    Button,
    Container,
    Drawer,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { closeWeb } from "../store/dark-web/dark-web.actions";
import Routes from "./Routes";
import Sidebar from "./Sidebar";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    showContainer: {
        position: "relative",
        display: "flex",
        width: 1000,
        height: 750,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        color: "white",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: "auto",
    },
    content: {
        width: "calc(100vw - 200px)",
        marginLeft: "200px",
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    hideContainer: {
        display: "none",
    },
    titleBar: {
        justifyContent: "space-between",
    },
    button: {
        color: "white",
    },
}));

export default () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const showWeb = useSelector((state) => state.darkWeb.showWeb);
    const character = useSelector((state) => state.darkWeb.characterData);

    const logOutHandler = () => {
        dispatch(closeWeb());
    };

    return (
        <div
            className={showWeb ? classes.showContainer : classes.hideContainer}
        >
            <Container maxWidth="sm">
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.titleBar}>
                        <Typography variant="h6">Dark Web</Typography>
                        <Typography
                            className={classes.button}
                            component={Button}
                            variant="h6"
                        >
                            Logout
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <Sidebar />
                    </div>
                </Drawer>
                <Toolbar />
                <main className={classes.content}>
                    <Routes />
                </main>
            </Container>
        </div>
    );
};
