import { Box, Card, CardHeader, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        color: "#fff",
    },
    wrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
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
    const totalCostDisplay = useSelector((state) => state.store.totalCostDisplay);

    return (
        <Box className={classes.wrapper}>
            <Card className="card">
                <CardHeader title={`Total: $${totalCostDisplay}`} />
            </Card>
        </Box>
    );
};

export default Bids;
