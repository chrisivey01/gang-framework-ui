import {
    Box,
    Button,
    CardContent,
    FormControl,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    TextField,
    Typography,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    excommunicadoPromptShow,
    updateBackstory,
    updateCharacter,
    viewMember,
} from "../store/roster/roster.actions";

const withRoster = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const roster = useSelector((state) => state.gang.roster);
    const character = useSelector((state) => state.gang.character);
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

    // const renderRoster = () => {
    //     if (roster) {
    //         return roster
    //             .sort((a, b) => b.gang_rank - a.gang_rank)
    //             .map((gang, i) => {
    //                 if (gang.gang_rank === 4) {
    //                     return (
    //                         <ListItem
    //                             onClick={() => dispatch(viewMember(roster[i]))}
    //                             dense
    //                             button
    //                             key={i}
    //                         >
    //                             <ListItemIcon>
    //                                 <StarIcon />
    //                             </ListItemIcon>
    //                             <ListItemText primary={gang.char_name} />
    //                         </ListItem>
    //                     );
    //                 } else {
    //                     return (
    //                         <ListItem
    //                             onClick={() => dispatch(viewMember(roster[i]))}
    //                             key={i}
    //                             dense
    //                             button
    //                         >
    //                             <ListItemText primary={gang.char_name} />
    //                         </ListItem>
    //                     );
    //                 }
    //             });
    //     }
    // };

    // const renderCharacterInfo = (character) => {
    //     return items.map((option, i) => {
    //         if (option.key === "Rank") {
    //             return (
    //                 <FormControl key={i} className="margin">
    //                     <TextField
    //                         className="inputs"
    //                         label={option.key}
    //                         select
    //                         variant="filled"
    //                         onChange={chooseRank}
    //                         value={character.gang_rank}
    //                         disabled={isEdit}
    //                     >
    //                         {option.value
    //                             .sort((a, b) => b - a)
    //                             .map((rank, i) => {
    //                                 return (
    //                                     <MenuItem dense key={i} value={rank}>
    //                                         {rank}
    //                                     </MenuItem>
    //                                 );
    //                             })}
    //                     </TextField>
    //                 </FormControl>
    //             );
    //         } else if (option.key === "Last Seen") {
    //             return (
    //                 <FormControl key={i} className="margin">
    //                     <TextField
    //                         className="inputs"
    //                         InputLabelProps={{ shrink: true }}
    //                         label={option.key}
    //                         variant="filled"
    //                         value={moment(
    //                             new Date(character.last_logged)
    //                         ).format("MMMM Do YYYY")}
    //                     ></TextField>
    //                 </FormControl>
    //             );
    //         } else {
    //             return (
    //                 <FormControl key={i} className="margin">
    //                     <TextField
    //                         className="inputs"
    //                         InputLabelProps={{ shrink: true }}
    //                         label={option.key}
    //                         multiline
    //                         disabled
    //                         variant="filled"
    //                         value={character[option.value]}
    //                     />
    //                 </FormControl>
    //             );
    //         }
    //     });
    // };

    const renderImageOrInput = () => {
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

    // const renderIfNotNull = () => {
    //     if (Object.keys(character).length > 0) {
    //         return (
    //             <CardContent>
    //                 <Grid container justify="center">
    //                     {renderImageOrInput(character)}
    //                     <Box className="wrapper-text">
    //                         {renderCharacterInfo(character)}
    //                     </Box>
    //                     <Box className="wrapper-box">
    //                         <TextField
    //                             className="backstory"
    //                             label="Backstory"
    //                             multiline
    //                             rows={22}
    //                             variant="filled"
    //                             disabled={isEdit}
    //                             value={character.backstory}
    //                             onChange={(e) =>
    //                                 dispatch(
    //                                     updateBackstory(character, roster, e)
    //                                 )
    //                             }
    //                         />
    //                         <Box className="submit-button">
    //                             <Button
    //                                 onClick={() =>
    //                                     dispatch(
    //                                         updateCharacter(roster, character)
    //                                     )
    //                                 }
    //                             >
    //                                 Submit
    //                             </Button>
    //                         </Box>
    //                     </Box>
    //                 </Grid>
    //                 <Box className="excommunicado">
    //                     <Button
    //                         color="secondary"
    //                         onClick={() => dispatch(excommunicadoPromptShow())}
    //                     >
    //                         Excommunicado
    //                     </Button>
    //                 </Box>
    //             </CardContent>
    //         );
    //     } else {
    //         return (
    //             <CardContent>
    //                 <Typography>
    //                     Please select a member from the roster.
    //                 </Typography>
    //             </CardContent>
    //         );
    //     }
    // };

    return (
        <WrappedComponent
            renderRoster={renderRoster}
            {...props}
            renderIfNotNull={renderIfNotNull}
            handleEditChange={handleEditChange}
            isEdit={isEdit}
        />
    );
};

export default withRoster;
