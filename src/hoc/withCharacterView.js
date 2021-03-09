import {
    Box,
    Button,
    CardContent,
    FormControl,
    Grid,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from "@material-ui/core";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeRank } from "../store/roster/roster.actions";

const withCharacterView = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.gang.character);
    const roster = useSelector((state) => state.gang.roster);
    const [imgUrl, setImgUrl] = useState("");
    const [isEdit, setIsEdit] = useState(true);

    const items = [
        { key: "Name", value: "char_name" },
        {
            key: "Rank",
            value: [0, 1, 2, 3, 4],
        },
        { key: "Last Seen", value: "last_logged" },
        { key: "Phone", value: "phone_number" },
    ];

    const handleEditChange = () => {
        setIsEdit(!isEdit);
    };

    const chooseRank = (event) => {
        let copyRoster = [...roster];
        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.gang_rank = event.target.value;
                return char;
            } else {
                return char;
            }
        });

        dispatch(changeRank(copyRoster));
    };

    const renderCharacterInfo = (character) => {
        return items.map((option) => {
            if (option.key === "Rank") {
                return (
                    <FormControl className="margin">
                        <TextField
                            className="inputs"
                            label={option.key}
                            select
                            variant="filled"
                            onChange={chooseRank}
                            value={character.gang_rank}
                            disabled={isEdit}
                        >
                            {option.value
                                .sort((a, b) => b - a)
                                .map((rank, i) => {
                                    return (
                                        <MenuItem dense key={i} value={rank}>
                                            {rank}
                                        </MenuItem>
                                    );
                                })}
                        </TextField>
                    </FormControl>
                );
            } else if (option.key === "Last Seen") {
                return (
                    <FormControl className="margin">
                        <TextField
                            className="inputs"
                            InputLabelProps={{ shrink: true }}
                            label={option.key}
                            variant="filled"
                            value={moment(
                                new Date(character.last_logged)
                            ).format("MMMM Do YYYY")}
                        ></TextField>
                    </FormControl>
                );
            } else {
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
            }
        });
    };

    const renderImageOrInput = () => {
        return (
            <Box className="wrapper-image">
                {!isEdit ? (
                    <TextField
                        style={{marginBottom:10}}
                        variant="filled"
                        label="Image Link"
                        value={character.profile_photo}
                        onChange={handleImgChange}
                    />
                ) : null}
                <img src={character.profile_photo} />
            </Box>
        );
    };

    const handleImgChange = (event) => {
        // setImgUrl(event.target.value);
        let copyRoster = [...roster];
        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.profile_photo = event.target.value;
                return char;
            } else {
                return char;
            }
        });

        dispatch(changeRank(copyRoster));
    };

    const renderIfNotNull = () => {
        if (Object.keys(character).length > 0) {
            return (
                <CardContent>
                    <Grid container justify="center">
                        {renderImageOrInput(character)}
                        <Box className="wrapper-text">
                            {renderCharacterInfo(character)}
                        </Box>
                        <Box className="wrapper-box">
                            <TextField
                                className="backstory"
                                label="Backstory"
                                multiline
                                rows={22}
                                variant="filled"
                                disabled={isEdit}
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

    return (
        <WrappedComponent
            renderIfNotNull={renderIfNotNull}
            handleEditChange={handleEditChange}
            isEdit={isEdit}
        />
    );
};

export default withCharacterView;
