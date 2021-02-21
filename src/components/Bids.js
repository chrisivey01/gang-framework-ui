import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        color: "#fff",
    },
    wrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        "& .card": {
            backgroundColor: "#212121",
            color: "#fff",
            width: "220px",
            margin: "20px",
        },
    },
}));

const Bids = () => {
    const classes = useStyles();
    const totalCostDisplay = useSelector(
        (state) => state.store.totalCostDisplay
    );

    return (
        <Grid className={classes.wrapper}>
            <Grid>Black Market</Grid>
            <Grid>{`Total: $${totalCostDisplay}`}</Grid>
        </Grid>
    );
};

export default Bids;
