import { Box, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import ExitIcon from "../assets/svg/exit.svg";
import { closeWeb } from "../store/dark-web/dark-web.actions";

const useStyles = makeStyles((theme) => ({
    box: {
        paddingLeft: 20,
        width: 30,
        display: "flex",
        cursor: "pointer",
    },
}));

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(closeWeb());
    };

    return (
        <Box
            className={classes.box}
            component={"span"}
            onClick={() => logOutHandler()}
        >
            <img src={ExitIcon}></img>
        </Box>
    );
};
