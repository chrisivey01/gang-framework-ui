import { Box, Button, CardContent, Grid, TextField } from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
    excommunicadoPromptShow,
    updateCharacter,
} from "../../store/gang/gang.actions.js";
import CharacterInfo from "./CharacterInfo.js";
import ImageRenderer from "./ImageRenderer.js";

const View = ({ isEdit, roster, dispatch, setMember, member }) => {
    const character = useSelector((state) => state.gang.character);

    return (
        <CardContent>
            <Grid container justify="center">
                <ImageRenderer
                    isEdit={isEdit}
                    setMember={setMember}
                    member={member}
                />
                <Box className="wrapper-text">
                    <CharacterInfo
                        isEdit={isEdit}
                        setMember={setMember}
                        member={member}
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
                        value={member.backstory}
                        onChange={(e) =>
                            setMember({
                                ...member,
                                backstory: e.target.value,
                            })
                        }
                    />
                    <Box className="submit-button">
                        <Button
                            onClick={() =>
                                dispatch(updateCharacter(roster, member))
                            }
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
            {character.gang_rank === 4 ? (
                <Box className="excommunicado">
                    <Button
                        color="secondary"
                        onClick={() => dispatch(excommunicadoPromptShow())}
                    >
                        Excommunicado
                    </Button>
                </Box>
            ) : (
                <Fragment />
            )}
        </CardContent>
    );
};

export default View;
