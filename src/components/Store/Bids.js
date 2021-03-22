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
    },
}));

const Bids = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.wrapper}>
            <Grid>Black Market</Grid>
        </Grid>
    );
};

export default Bids;
