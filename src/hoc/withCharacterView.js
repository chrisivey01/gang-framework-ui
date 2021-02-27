import {
    Box,
    Button,
    CardContent,
    FormControl,
    Grid,
    MenuItem,
    TextField,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeRank } from "../store/roster/roster.actions";

const withCharacterView = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.gang.character);
    const roster = useSelector((state) => state.gang.roster);

    const items = [
        { key: "Name", value: "char_name" },
        {
            key: "Rank",
            value: [0, 1, 2, 3, 4],
        },
        { key: "Last Seen", value: "last_seen" },
        { key: "Age", value: "age" },
        { key: "Phone", value: "phone_number" },
        { key: "Legal Job", value: "legal_job" },
    ];

    const chooseRank = (event) => {
        let copyRoster = [...roster];
        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.gang_rank = event.target.value;
                console.log(
                    "Changed " + char.char_name + " rank to " + char.gang_rank
                );
                return char;
            } else {
                return char;
            }
        });

        dispatch(changeRank(copyRoster));
    };

    const renderCharacterInfo = (character) => {
        return items.map((option) => {
            if (option.key !== "Rank") {
                return (
                    <FormControl className="margin">
                        <TextField
                            className="inputs"
                            InputLabelProps={{ shrink: true }}
                            label={option.key}
                            multiline
                            disabled
                            variant="filled"
                            value={character[option.value]}
                        />
                    </FormControl>
                );
            } else {
                return (
                    <FormControl className="margin">
                        <TextField
                            className="inputs"
                            InputLabelProps={{ shrink: true }}
                            label={option.key}
                            select
                            variant="filled"
                            onChange={chooseRank}
                            value={character.gang_rank}
                        >
                            {option.value
                                .sort((a, b) => b - a)
                                .map((rank, i) => {
                                    return (
                                        <MenuItem key={i} value={rank}>
                                            {rank}
                                        </MenuItem>
                                    );
                                })}
                        </TextField>
                    </FormControl>
                );
            }
        });
    };

    const renderIfNotNull = () => {
        if (Object.keys(character).length > 0) {
            return (
                <CardContent>
                    <Grid container justify="center">
                        <Box className="wrapper-text">
                            {renderCharacterInfo(character)}
                        </Box>
                        <Box className="wrapper-box">
                            <TextField
                                className="notes"
                                label="Notes"
                                multiline
                                rows={10}
                                variant="filled"
                            />
                            <Box className="submit-button">
                                <Button>Submit</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Box className="excommunicado">
                        <Button color="secondary">Excommunicado</Button>
                    </Box>
                </CardContent>
            );
        } else {
            return (
                <CardContent>
                    <Typography>
                        Please select a member from the roster.
                    </Typography>
                </CardContent>
            );
        }
    };

    return <WrappedComponent renderIfNotNull={renderIfNotNull} />;
};

export default withCharacterView;
