import { makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CalendarIcon from "../assets/svg/calendar.svg";
import StoreIcon from "../assets/svg/store.svg";
import WarIcon from "../assets/svg/sword.svg";
import RosterIcon from "../assets/svg/team.svg";
import withTitle from "../hoc/withTitle";

const useStyles = makeStyles((theme) => ({
    box: {
        display: "flex",
        position: "relative",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
        color: "white",
        marginLeft: 15,
        "& .svg": {
            paddingLeft: 8,
            paddingRight: 8,
            width: 35,
        },
        "&:hover": {
            color: "#007aac",
            "&:after": {
                transform: "scale(1,1)",
            },
        },
        "&::after": {
            position: "absolute",
            display: "block",
            content: "''",
            minWidth: "100%",
            height: "3px",
            bottom: 0,
            background: "#007aac",
            transition: "all 0.5s ease-out 0s",
            transform: "scale(0, 1)",
        },
    },
    selected: {
        color: "#007aac",
        "&::after": {
            transform: "scale(1,1)",
        },
    },
}));

const Title = ({ pathHandler }) => {
    const classes = useStyles();
    const character = useSelector((state) => state.gang.character);

    return (
        <Fragment>
            <Link
                to={"/"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <img src={StoreIcon} className="svg" />
                <Typography component={"span"}>Store</Typography>
            </Link>
            <Link
                to={"/roster"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <img src={RosterIcon} className="svg" />
                <Typography component={"span"}>Roster</Typography>
            </Link>
            {character.gang_rank === 4 ? (
                <Link
                    to={"/war"}
                    className={classes.box}
                    onClick={(e) => pathHandler(e)}
                >
                    <img src={WarIcon} className="svg" />
                    <Typography component={"span"}>War</Typography>
                </Link>
            ) : (
                <Fragment />
            )}
            <Link
                to={"/chat"}
                className={classes.box}
                onClick={(e) => pathHandler(e)}
            >
                <img src={CalendarIcon} className="svg" />
                <Typography component={"span"}>Calendar</Typography>
            </Link>
        </Fragment>
    );
};

export default withTitle(Title);
