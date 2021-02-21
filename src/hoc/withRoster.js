import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import gangRoster from "../helpers/gang.json";

const withRoster = (WrappedComponent) => (props) => {

    const renderRoster = () => {
        if (process.env.NODE_ENV === "development") {
            return gangRoster
                .sort((a, b) => b.gangRank - a.gangRank)
                .map((gang, i) => {
                    if (gang.gangRank === "4") {
                        return (
                            <ListItem dense button key={i}>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText primary={gang.char_name} />
                            </ListItem>
                        );
                    } else {
                        return (
                            <ListItem key={i} dense button>
                                <ListItemText primary={gang.char_name} />
                            </ListItem>
                        );
                    }
                });
        } else {
            return gangRoster
                .sort((a, b) => b.gangRank - a.gangRank)
                .map((gang, i) => {
                    if (gang.gangRank === "4") {
                        return (
                            <ListItem dense button key={i}>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText primary={gang.char_name} />
                            </ListItem>
                        );
                    } else {
                        return (
                            <ListItem key={i} dense button>
                                <ListItemText primary={gang.char_name} />
                            </ListItem>
                        );
                    }
                });
        }
    };

    return <WrappedComponent renderRoster={renderRoster} {...props} />;
};

export default withRoster;
