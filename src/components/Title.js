import {
    Box,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import Roster from "./Roster";
import War from "./War";
import { ReactComponent as ChatIcon } from "../../images/chat.svg";
import { ReactComponent as WarIcon } from "../../images/sword.svg";
import { ReactComponent as RosterIcon } from "../../images/team.svg";

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        justifyContent: "center",
        padding: "15px 15px",
        bottom: 0,
        color: "white",
        "&:hover": {
            color: "#007aac",
        },
        "& svg": {
            paddingLeft: 8,
            paddingRight: 8,
            width: 30,
        },
        "& a": {
            textDecoration: "none",
            display: "flex",
            textAlign: "center",
        },
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Link to={"/roster"} className={classes.box}>
                <Box component={"a"}>
                    <RosterIcon className="svg" />
                    <Typography component={"span"}>Roster</Typography>
                </Box>
            </Link>
            <Link to={"/war"} className={classes.box}>
                <Box component={"a"}>
                    <WarIcon className="svg" />
                    <Typography component={"span"}>War</Typography>
                </Box>
            </Link>
            <Link to={"/chat"} className={classes.box}>
                <Box component={"a"}>
                    <ChatIcon className="svg" />
                    <Typography component={"span"}>Chat</Typography>
                </Box>
            </Link>
        </Fragment>
    );
};
