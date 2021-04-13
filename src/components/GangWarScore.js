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
    const activeWar = useSelector((state) => state.war.activeWar);
    const warData = useSelector((state) => state.war.warData);
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
                            {warData.gang_name1}: {warData.score1}/
                            {warData.max}
                        </Typography>
                        <Typography>
                            {warData.gang_name2}: {warData.score2}/
                            {warData.max}
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
