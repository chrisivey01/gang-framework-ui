import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
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
        <List>
            {sideBarInfo.map((text, index) => (
                <ListItem
                    button
                    key={text.path}
                    component={Link}
                    to={text.path}
                >
                    <ListItemText primary={text.text} />
                </ListItem>
            ))}
        </List>
    );
};
