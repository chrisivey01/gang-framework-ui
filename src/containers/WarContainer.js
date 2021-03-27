import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import TabPanel from "../components/War/TabPanel";
import VerticalTabs from "../components/War/VerticalTabs";
import WarDialog from "../components/War/WarDialog";
import gangs from "../helpers/gangwar.json";
import {
    showWarPrompt,
    updateDispute,
    updatePoints,
    updateReward
} from "../store/war/war.actions";

const useStyles = makeStyles(() => ({
    container: {
        margin: 10,
        backgroundColor: "#333",
        color: "white",
        "& .box": {
            marginTop: 10,
            marginBottom: 10,
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            color: "white",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.87)",
        },
        "& .MuiFormLabel-root": {
            color: "white",
        },
        "& .MuiButton-root": {
            backgroundColor: "#212121",
            color: "white",
        },
    },
}));

const WarContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Grid container>
            <VerticalTabs />

            {gangs.map((gang, i) => {
                return (
                    <TabPanel index={i} key={i}>
                        <Card className={classes.container} elevation={3}>
                            <CardContent>
                                <Typography variant="body2">
                                    Gang Name: {gang.name}
                                </Typography>
                                <Box className="box">
                                    <TextField
                                        label="Total War Points"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        defaultValue={0}
                                        onChange={(e) =>
                                            dispatch(
                                                updatePoints(
                                                    parseInt(e.target.value)
                                                )
                                            )
                                        }
                                        inputProps={{
                                            min: 0,
                                            max: 30,
                                        }}
                                    />
                                </Box>
                                <Box className="box">
                                    <TextField
                                        style={{
                                            width: "100%",
                                            color: "white",
                                        }}
                                        label="Dispute"
                                        type="search"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        onChange={(e) =>
                                            dispatch(
                                                updateDispute(e.target.value)
                                            )
                                        }
                                    />
                                </Box>
                                <Box className="box">
                                    <TextField
                                        style={{
                                            width: "100%",
                                            color: "white",
                                        }}
                                        label="Reward"
                                        type="search"
                                        multiline
                                        rows={2}
                                        variant="outlined"
                                        onChange={(e) =>
                                            dispatch(
                                                updateReward(e.target.value)
                                            )
                                        }
                                    />
                                </Box>
                                <Button
                                    onClick={() => dispatch(showWarPrompt())}
                                >
                                    Submit
                                </Button>
                            </CardContent>
                        </Card>
                        <WarDialog />
                    </TabPanel>
                );
            })}
        </Grid>
    );
};

export default WarContainer;
