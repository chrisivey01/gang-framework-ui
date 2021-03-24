import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
    excommunicadoPromptHide,
    excommunicadoPromptSuccess,
} from "../../store/roster/roster.actions";

const Excommunicado = () => {
    const dispatch = useDispatch();
    const roster = useSelector((state) => state.gang.roster);
    const character = useSelector((state) => state.gang.character);
    const showDialog = useSelector((state) => state.gang.showDialog);

    return (
        <Dialog open={showDialog}>
            <DialogTitle>
                {"Are you sure you wish to excommunicado " +
                    character.char_name +
                    "?"}
            </DialogTitle>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => dispatch(excommunicadoPromptHide())}
                    color="primary"
                >
                    Disagree
                </Button>
                <Button
                    onClick={() =>
                        dispatch(excommunicadoPromptSuccess(roster, character))
                    }
                    color="primary"
                    autoFocus
                >
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Excommunicado;
