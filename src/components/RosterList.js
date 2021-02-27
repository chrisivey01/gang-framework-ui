import { List, makeStyles, Paper } from "@material-ui/core";
import withRoster from "../hoc/withRoster";

const useStyles = makeStyles((theme) => ({
    sidebarContainer: {
        backgroundColor: "#333",
        fontSize: 14,
        color: "rgba(227,227,227)",
        padding: 0,
        height: "fit-content",
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

const RosterList = ({ renderRoster }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.sidebarContainer}>
            <List component="nav" className="list">
                {renderRoster()}
            </List>
        </Paper>
    );
};

export default withRoster(RosterList);
