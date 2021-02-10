import { Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { closeWeb } from "../store/dark-web/dark-web.actions";

const useStyles = makeStyles((theme) => ({
    button: {
        color: "white",
    },
}));

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(closeWeb());
    };

    return (
        <Button className={classes.button} onClick={() => logOutHandler()}>
            Logout
        </Button>
    );
};
