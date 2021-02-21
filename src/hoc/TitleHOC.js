import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    selected: {
        color: "#007aac",
        "&::after": {
            transform: "scale(1,1)",
        },
    },
}));

const withTitle = (WrappedComponent) => (props) => {
    const classes = useStyles();
    const [previousElement, setPreviousElement] = useState(null);

    const pathHandler = (e) => {
        if (previousElement) {
            previousElement.classList.remove(classes.selected);
            setPreviousElement(e.currentTarget);
            e.currentTarget.classList.add(classes.selected);
        } else {
            setPreviousElement(e.currentTarget);
            e.currentTarget.classList.add(classes.selected);
        }
    };

    return <WrappedComponent pathHandler={pathHandler} {...props} />;
};

export default withTitle;
