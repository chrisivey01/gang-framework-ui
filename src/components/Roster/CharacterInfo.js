import { FormControl, MenuItem, TextField } from "@material-ui/core";
import moment from 'moment';

const CharacterInfo = ({ isEdit, setMember, member }) => {
    const items = [
        { key: "Name", value: "char_name" },
        {
            key: "Rank",
            value: [0, 1, 2, 3, 4],
        },
        { key: "Last Seen", value: "last_logged" },
        { key: "Phone", value: "phone_number" },
    ];

    return items.map((option, i) => {
        if (option.key === "Rank") {
            return (
                <FormControl key={i} className="margin">
                    <TextField
                        className="inputs"
                        label={option.key}
                        select
                        variant="filled"
                        onChange={(e) =>
                            setMember({
                                ...member,
                                gang_rank: parseInt(e.target.value),
                            })
                        }
                        value={member.gang_rank}
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
                        value={moment(new Date(member.last_logged)).format(
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
                        value={member[option.value]}
                    />
                </FormControl>
            );
        }
    });
};

export default CharacterInfo;
