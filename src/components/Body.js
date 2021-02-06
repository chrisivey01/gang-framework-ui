import {
    AppBar,
    Container,
    CssBaseline,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    showContainer: {
        position: 'relative',
    },
    hideContainer: {
        display: 'none',
    }
}))

export default () => {
    const classes = useStyles();
    const showWeb = useSelector((state) => state.darkWeb.showWeb);
    return (
        <div className={showWeb ? classes.showContainer : classes.hideContainer}>
            <CssBaseline />
            <Container maxWidth="sm">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">News</Typography>
                    </Toolbar>
                </AppBar>
                <Typography
                    component="div"
                    style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
                />
            </Container>
        </div>
    );
};
