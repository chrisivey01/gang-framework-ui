import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const WarDialog = ({
    gangFrom,
    dispute,
    terms,
    reward,
    title,
    showDialog,
    handleData,
    closePrompt,
}) => {
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
                <Typography gutterBottom>
                    <bolder>From: </bolder> {gangFrom}{" "}
                </Typography>
                <Typography gutterBottom>
                    <bolder>Dispute: </bolder> {dispute}{" "}
                </Typography>
                <Typography gutterBottom>
                    <bolder>Terms: </bolder> {terms}{" "}
                </Typography>
                <Typography gutterBottom>
                    <bolder>Reward: </bolder> {reward}{" "}
                </Typography>
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
