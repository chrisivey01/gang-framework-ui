import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

}))


export default () => {
    const classes = useStyles();

    const sideBarInfo = [
        {
            text: "Your Gang Roster",
            path: "roster",
        },
        {
            text: "Gang Wars",
            path: "wars",
        },
        {
            text: "Discussion",
            path: "discussion",
        },
        {
            text: "Dark Chat",
            path: "darkChat",
        },
        {
            text: "Photos",
            path: "photos",
        },
    ];
    return (
        <List style={{ backgroundColor: "rgba: (0,0,0,.65)" }}>
            {sideBarInfo.map((text, index) => (
                <ListItem
                    button
                    dense
                    key={text.path}
                    component={Link}
                    to={text.path}
                    divider
                >
                    <ListItemText primary={text.text} />
                </ListItem>
            ))}
        </List>
    );
};
