import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Input,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";
import TabPanel from "../components/War/TabPanel";
import VerticalTabs from "../components/War/VerticalTabs";
import gangs from "../helpers/gangwar.json";

const useStyles = makeStyles(() => ({
    container: {
        padding: 5,
        backgroundColor: "#333",
        color: "white",
    },
}));

const WarContainer = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <VerticalTabs />

            {gangs.map((gang, i) => {
                return (
                    <TabPanel index={i} key={i}>
                        <Card className={classes.container} elevation={3}>
                            <CardContent style={{ width: "100%", margin: 10 }}>
                                <Typography variant="body2">
                                    Gang Name: {gang.name}
                                </Typography>
                                <Box>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Reason"
                                        multiline
                                        rowsMax={4}
                                        //   value={value}
                                        //   onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Reward"
                                        multiline
                                        rowsMax={4}
                                        //   value={value}
                                        //   onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Button>Submit</Button>
                            </CardContent>
                        </Card>
                    </TabPanel>
                );
            })}
        </Grid>
    );
};

export default WarContainer;
