import {
    Card,
    CardHeader,
    Divider,
    Grid,
    List,
    ListItem,
    makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        color: "#fff",
    },
    wrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",

        "& .MuiCardHeader-root": {
            padding: 10,
        },

        "& .MuiCard-root": {
            backgroundColor: "#212121",
            color: "#fff",
            top: "180px",
            position: "absolute",
            right: "50px",
        },
    },
}));

const Bids = () => {
    const classes = useStyles();
    const cart = useSelector((state) => state.store.cart);

    return (
        <Grid className={classes.wrapper}>
            <Grid>Black Market</Grid>
            <Card>
                <CardHeader title={"Cart"} />
                <Divider
                    variant={"fullWidth"}
                    style={{ backgroundColor: "#fff" }}
                />
                <List style={{ width: 140 }}>
                    {[...cart].map(([name, value]) => {
                        if (value.quantity > 0) {
                            return (
                                <ListItem dense style={{ fontSize: 12 }}>
                                    {value.label} x {value.quantity}
                                </ListItem>
                            );
                        }
                    })}
                </List>
            </Card>
        </Grid>
    );
};

export default Bids;
