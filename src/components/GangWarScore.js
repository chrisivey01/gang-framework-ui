import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    warContainer: {
        position: "absolute",
        right: 15,
        top: 15,
        width: 210,
        backgroundColor: "#212121",
        color: "#fff",
        fontWeight: "bolder",
        borderRadius: 10,
    },
}));

const GangWarScore = () => {
    const classes = useStyles();
    const activeWar = useSelector((state) => state.points.activeWar);
    const gang_id1 = useSelector((state) => state.points.gang_id1);
    const gang_name1 = useSelector((state) => state.points.gang_name1);
    const gang_id2 = useSelector((state) => state.points.gang_id2);
    const gang_name2 = useSelector((state) => state.points.gang_name2);
    const score1 = useSelector((state) => state.points.score1);
    const score2 = useSelector((state) => state.points.score2);
    const max = useSelector((state) => state.points.max);

    if (Object.keys(warData).length > 1 && activeWar) {
        return (
            <Card className={classes.warContainer}>
                <CardContent>
                    <Typography
                        variant="body2"
                        style={{ display: "flex", justifyContent: "center" }}
                        gutterBottom
                    >
                        Gang War
                    </Typography>
                    <Divider style={{ backgroundColor: "#fff" }} light />
                    <Box style={{marginTop: 10}}>
                        <Typography>
                            {gang_name1}: {score1}/
                            {max}
                        </Typography>
                        <Typography>
                            {gang_name2}: {score2}/
                            {max}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    } else {
        return <Fragment />;
    }
};

export default GangWarScore;
