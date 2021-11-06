import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Paper
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { useDispatch, useSelector } from "react-redux";
import { viewMember } from "../../store/gang/gang.actions";

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        backgroundColor: "#333",
        fontSize: 14,
        color: "rgba(227,227,227)",
        padding: 0,
        height: "520px",
        overflow: "auto",
        "& .MuiCardContent-root": {
            padding: 0,
        },
        "& .MuiListItem-root:hover": {
            backgroundColor: "rgba(0,0,0,0.25)",
        },
        "& .MuiListItemIcon-root": {
            minWidth: "30px",
        },
        "& .MuiListItemText-inset": {
            paddingLeft: "31px",
        },
    },
}));

const RosterList = () => {
    const classes = useStyles();
    const roster = useSelector((state) => state.gang.roster);
    const dispatch = useDispatch();

    return (
        <Paper className={classes.sidebarContainer}>
            <List component="nav" className="list">
                {roster
                    .sort((a, b) => b.gang_rank - a.gang_rank)
                    .map((gang, i) => {
                        if (gang.gang_rank === 4) {
                            return (
                                <ListItem
                                    onClick={() =>
                                        dispatch(viewMember(roster[i]))
                                    }
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
                                    onClick={() =>
                                        dispatch(viewMember(roster[i]))
                                    }
                                    key={i}
                                    dense
                                    button
                                >
                                    <ListItemText primary={gang.char_name} />
                                </ListItem>
                            );
                        }
                    })}
            </List>
        </Paper>
    );
};

export default RosterList;
