import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    Grid,
    makeStyles,
    MenuItem,
    TextField,
    Typography
} from "@material-ui/core";
import moment from "moment";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    excommunicadoPromptShow,
    updateBackstory,
    updateCharacter
} from "../../store/roster/roster.actions";
import EditDisableSwitch from "./EditDisableSwitch";
import Excommunicado from "./Excommunicado";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 10px 10px 10px",
        width: "inherit",
        backgroundColor: "#333",
        color: "#fff",

        "& .edit": {
            justifyContent: "flex-end",
            paddingRight: 10,
        },

        "& .wrapper-text": {
            width: "225px",
            textAlign: "center",
        },

        "& .wrapper-box": {
            marginTop: "7px",

            "& .submit-button": {
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 30,

                "& .MuiButton-root": {
                    color: "#fff",
                    backgroundColor: "#212121",
                },
            },
        },
        "& .wrapper-image": {
            width: "300px",
            height: "300px",

            "& img": {
                objectFit: "contain",
                height: "100%",
                width: "100%",
            },
        },
        "& .margin": {
            width: "80%",
            padding: theme.spacing(1),
        },
        "& .inputLabel": {
            fontSize: 12,
            height: 20,
        },
        "& .MuiInputLabel-root": {
            color: "#fff",
        },
        "& .MuiTypography-root": {
            color: "#fff",
        },
        "& .MuiInputBase-root": {
            color: "#fff",
            fontSize: 12,
            backgroundColor: "#212121",
        },
        "& .MuiFilledInput-underline:after": {
            borderBottom: "#fff",
        },
        "& .backstory": {
            width: 400,
        },
        "& .excommunicado": {
            display: "flex",
            justifyContent: "flex-end",
            top: "30px",
            position: "relative",
        },
    },
}));

const CharacterInfo = ({ isEdit, character, roster, dispatch }) => {
    const items = [
        { key: "Name", value: "char_name" },
        {
            key: "Rank",
            value: [0, 1, 2, 3, 4],
        },
        { key: "Last Seen", value: "last_logged" },
        { key: "Phone", value: "phone_number" },
    ];

    const chooseRank = (event) => {
        let copyRoster = [...roster];
        let copyCharacter = { ...character };
        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.gang_rank = event.target.value;
                copyCharacter.gang_rank = event.target.value;
                return char;
            } else {
                return char;
            }
        });

        dispatch(updateCharacter(copyRoster, copyCharacter));
    };

    return items.map((option, i) => {
        if (option.key === "Rank") {
            return (
                <FormControl key={i} className="margin">
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
                <FormControl key={i} className="margin">
                    <TextField
                        className="inputs"
                        InputLabelProps={{ shrink: true }}
                        label={option.key}
                        variant="filled"
                        value={moment(new Date(character.last_logged)).format(
                            "MMMM Do YYYY"
                        )}
                    ></TextField>
                </FormControl>
            );
        } else {
            return (
                <FormControl key={i} className="margin">
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

const View = ({ isEdit, character, roster, dispatch }) => {
    return (
        <CardContent>
            <Grid container justify="center">
                <ImageRenderer
                    isEdit={isEdit}
                    character={character}
                    roster={roster}
                    dispatch={dispatch}
                />
                <Box className="wrapper-text">
                    <CharacterInfo
                        isEdit={isEdit}
                        character={character}
                        roster={roster}
                        dispatch={dispatch}
                    />
                </Box>
                <Box className="wrapper-box">
                    <TextField
                        className="backstory"
                        label="Backstory"
                        multiline
                        rows={22}
                        variant="filled"
                        disabled={isEdit}
                        value={character.backstory}
                        onChange={(e) =>
                            dispatch(updateBackstory(character, roster, e))
                        }
                    />
                    <Box className="submit-button">
                        <Button
                            onClick={() =>
                                dispatch(updateCharacter(roster, character))
                            }
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Box className="excommunicado">
                <Button
                    color="secondary"
                    onClick={() => dispatch(excommunicadoPromptShow())}
                >
                    Excommunicado
                </Button>
            </Box>
        </CardContent>
    );
};

const PickCharacter = () => {
    return (
        <CardContent>
            <Typography>Please select a member from the roster.</Typography>
        </CardContent>
    );
};

const ImageRenderer = ({ isEdit, character, roster, dispatch }) => {
    const handleImgChange = (event) => {
        let copyRoster = [...roster];
        let copyCharacter = { ...character };

        copyRoster = copyRoster.map((char) => {
            if (char.char_name === character.char_name) {
                char.profile_photo = event.target.value;
                copyCharacter.profile_photo = event.target.value;
                return char;
            } else {
                return char;
            }
        });

        dispatch(updateCharacter(copyRoster, copyCharacter));
    };

    return (
        <Box className="wrapper-image">
            {!isEdit ? (
                <TextField
                    style={{ marginBottom: 10 }}
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

const RosterView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const roster = useSelector((state) => state.gang.roster);
    const character = useSelector((state) => state.gang.character);
    const gangCap = useSelector((state) => state.gang.gangCap);
    const [isEdit, setIsEdit] = useState(true);

    const handleEditChange = () => {
        setIsEdit(!isEdit);
    };

    return (
        <Card className={classes.container}>
            {character.gang_rank === 4 ? (
                <EditDisableSwitch
                    isEdit={isEdit}
                    handleEditChange={handleEditChange}
                />
            ) : (
                <Fragment />
            )}
            {process.env.NODE_ENV === "development" ? (
                <CardHeader
                    className="header"
                    title={"Boobs"}
                    subheader={"Member count: " + roster.length + "/" + gangCap}
                />
            ) : (
                <CardHeader
                    className="header"
                    title={roster[0].current_gang}
                    subheader={"Member count: " + roster.length + "/" + gangCap}
                />
            )}

            {character ? (
                <Fragment>
                    <View
                        isEdit={isEdit}
                        character={character}
                        roster={roster}
                        dispatch={dispatch}
                    />
                    <Excommunicado />
                </Fragment>
            ) : (
                <PickCharacter />
            )}
        </Card>
    );
};

export default RosterView;
