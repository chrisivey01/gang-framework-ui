import {
    Card,
    CardHeader,
    Divider,
    Grid,
    List,
    ListItem,
    makeStyles,
} from "@material-ui/core";

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

const Bids = ({ cart }) => {
    const classes = useStyles();

    return (
        <Grid className={classes.wrapper}>
            <Card>
                <CardHeader title={"Cart"} />
                <Divider
                    variant={"fullWidth"}
                    style={{ backgroundColor: "#fff" }}
                />
                <List style={{ width: 140 }}>
                    {[...cart].map(([name, value], i) => {
                        if (value.quantity > 0) {
                            return (
                                <ListItem
                                    key={i}
                                    dense
                                    style={{ fontSize: 12 }}
                                >
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
