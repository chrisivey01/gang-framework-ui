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
