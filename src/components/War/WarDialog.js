import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const WarDialog = ({ text, title, showDialog, handleData, closePrompt }) => {
    const dispatch = useDispatch();

    return (
        <Dialog open={showDialog} onClose={() => dispatch(closePrompt())}>
            <DialogTitle
                id="customized-dialog-title"
                onClose={() => dispatch(closePrompt())}
            >
                {title}
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>{text}</Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleData} color="primary">
                    Yes
                </Button>
                <Button
                    autoFocus
                    onClick={() => dispatch(closePrompt())}
                    color="primary"
                >
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default WarDialog;
