import { Box, makeStyles, Typography } from "@material-ui/core";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../../images/chat.svg";
import { ReactComponent as WarIcon } from "../../images/sword.svg";
import { ReactComponent as RosterIcon } from "../../images/team.svg";
import { ReactComponent as HomeIcon } from "../../images/home.svg";

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        justifyContent: "center",
        color: "white",
        "& .MuiBox-root": {
            padding: "10px 10px 10px 10px",
        },
        "& svg": {
            paddingLeft: 8,
            paddingRight: 8,
            width: 30,
        },
        "& a": {
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            "&:hover": {
                color: "#007aac",
                "&::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "left",
                },
            },
            "&:after": {
                position: "absolute",
                content: "''",
                width: "100%",
                height: "3px",
                top: "100%",
                left: 0,
                background: "#007aac",
                transition: "transform 0.5s",
                transform: "scaleX(0)",
            },
        },
        "& .selected":{
            color: "#007aac",
        },
        "& .selected:after": {
            transition: "transform 0.5s",
            transform: "scaleX(1)",

            "span" :{
                color:"#007aac"
            }
        },
    },
}));

export default () => {
    const classes = useStyles();
    const [previousElement, setPreviousElement] = useState(null);
    const pathHandler = (e) => {
        if (previousElement) {
            previousElement.classList.remove("selected");
            setPreviousElement(e.currentTarget.firstChild);
            e.currentTarget.firstChild.classList.add("selected");
        } else {
            setPreviousElement(e.currentTarget.firstChild);
            e.currentTarget.firstChild.classList.add("selected");
        }
        console.log(e.currentTarget);
    };

    return (
        <Fragment>
            <Link
                to={"/"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <Box component={"a"}>
                    <HomeIcon className="svg" />
                    <Typography component={"span"}>Home</Typography>
                </Box>
            </Link>
            <Link
                to={"/roster"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <Box component={"a"}>
                    <RosterIcon className="svg" />
                    <Typography component={"span"}>Roster</Typography>
                </Box>
            </Link>
            <Link
                to={"/war"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <Box component={"a"}>
                    <WarIcon className="svg" />
                    <Typography component={"span"}>War</Typography>
                </Box>
            </Link>
            <Link
                to={"/chat"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <Box component={"a"}>
                    <ChatIcon className="svg" />
                    <Typography component={"span"}>Chat</Typography>
                </Box>
            </Link>
        </Fragment>
    );
};
