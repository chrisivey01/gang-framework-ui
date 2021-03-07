import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRoster, viewMember } from "../store/roster/roster.actions";

const withRoster = (WrappedComponent) => (props) => {
    const dispatch = useDispatch();
    const roster = useSelector((state) => state.gang.roster);

    const selectPlayer = (i) => {
        dispatch(viewMember(roster[i]));
        console.log(roster[i]);
    };

    const renderRoster = () => {
        return roster
            .sort((a, b) => b.gang_rank - a.gang_rank)
            .map((gang, i) => {
                if (gang.gang_rank === 4) {
                    return (
                        <ListItem
                            onClick={() => selectPlayer(i)}
                            dense
                            button
                            key={i}
                        >
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary={gang.char_name} />
                        </ListItem>
                    );
                } else {
                    return (
                        <ListItem
                            onClick={() => selectPlayer(i)}
                            key={i}
                            dense
                            button
                        >
                            <ListItemText primary={gang.char_name} />
                        </ListItem>
                    );
                }
            });
    };

    return <WrappedComponent renderRoster={renderRoster} {...props} />;
};

export default withRoster;
