import { Box, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ReactComponent as ExitIcon } from "../../images/exit.svg";
import { closeWeb } from "../store/dark-web/dark-web.actions";

const useStyles = makeStyles((theme) => ({
    box: {
        paddingLeft: 8,
        paddingRight: 8,
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
            <ExitIcon />
        </Box>
    );
};
