import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { closeWarPrompt } from "../../store/war/war.actions";

const WarDialog = () => {
    const dispatch = useDispatch();
    const showWarPrompt = useSelector((state) => state.war.showWarPrompt);

    return (
        <Dialog open={showWarPrompt} onClose={() => dispatch(closeWarPrompt())}>
            <DialogTitle
                id="customized-dialog-title"
                onClose={() => dispatch(closeWarPrompt())}
            >
                Gang War Declaration
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Declaring a gang war is a big deal. Are you sure you want
                    this?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => dispatch(acceptWarPrompt())}
                    color="primary"
                >
                    Yes
                </Button>
                <Button
                    autoFocus
                    onClick={() => dispatch(closeWarPrompt())}
                    color="primary"
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default WarDialog;
