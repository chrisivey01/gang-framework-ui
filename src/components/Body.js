import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Fragment } from "react";

export default () => {
    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">News</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Typography
                    component="div"
                    style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
                />
            </Container>
        </Fragment>
    );
};
