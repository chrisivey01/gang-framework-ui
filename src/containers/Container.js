import {
    AppBar,
    Container,
    Drawer,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton";
import Sidebar from "../components/Sidebar";
import { closeWeb } from "../store/dark-web/dark-web.actions";

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
            },
        },

        "& .drawer": {
            width: drawerWidth,
            overflow: "auto",
            "& .MuiDrawer-paper": {
                position: "unset",
            },
        },

        "& .content": {
            margin: "100px 0 0px 200px",
            flexGrow: 1,
        },
    },
    hideContainer: {
        display: "none",
    },
}));

export default (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const showWeb = useSelector((state) => state.darkWeb.showWeb);
    const character = useSelector((state) => state.darkWeb.characterData);

    return (
        <div className={true ? classes.showContainer : classes.hideContainer}>
            <AppBar position="static" className="appBar">
                <Toolbar className="titleBar">
                    <Typography variant="h6">Dark Web</Typography>
                    <Typography
                        className="button"
                        component={LogoutButton}
                        variant="h6"
                    >
                        Logout
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer className="drawer" variant="permanent">
                <Sidebar />
            </Drawer>
            <main className="content">{props.children}</main>
        </div>
    );
};
