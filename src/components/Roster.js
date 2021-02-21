import { Card, CardContent, List, makeStyles } from "@material-ui/core";
import withRoster from "../hoc/withRoster";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        backgroundColor: "#333",
        fontSize: 14,
        color: "rgba(227,227,227)",
        margin: 10,
        padding: 0,
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

const Roster = ({ renderRoster }) => {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <CardContent className={classes.content}>
                <List component="nav" className="list">
                    {renderRoster()}
                </List>
            </CardContent>
        </Card>
    );
};

export default withRoster(Roster);
