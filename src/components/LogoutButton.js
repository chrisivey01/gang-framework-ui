import { Box, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ExitIcon from "../assets/svg/exit.svg";
import { closeWeb } from "../store/web/web.actions";

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
    },
}));

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logOutHandler = () => {
        document.querySelector("#blur").style = "display:none";
        dispatch(closeWeb());
    };

    return (
        <Box
            component={"a"}
            className={classes.box}
            onClick={() => logOutHandler()}
        >
            <img className="svg" src={ExitIcon}></img>
        </Box>
    );
};
