import {
    Box,
    Button,
    Card,
    CardContent,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showWarPrompt } from "../../store/war/war.actions";

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

const TabPanel = ({ setWarForm, warForm }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const points = useSelector((state) => state.war.points);
    const gangText = useSelector((state) => state.war.gangText);

    return (
        <div
            role="tabpanel"
            id={`vertical-tabpanel-${points}`}
            aria-labelledby={`vertical-tab-${points}`}
            style={{ flexGrow: 1 }}
        >
            <Card className={classes.container} elevation={3}>
                <CardContent>
                    <Typography variant="body2">
                        Gang Name: {gangText}
                    </Typography>
                    <Box className="box">
                        <TextField
                            label="Total War Points"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={warForm.points}
                            variant="outlined"
                            onChange={(e) => {
                                if (parseInt(e.target.value) > 30) {
                                    e.target.value = "30";
                                    setWarForm({
                                        ...warForm,
                                        points: parseInt(e.target.value),
                                    });
                                } else {
                                    setWarForm({
                                        ...warForm,
                                        points: parseInt(e.target.value),
                                    });
                                }
                            }}
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
                            value={warForm.dispute}
                            variant="outlined"
                            onChange={(e) =>
                                setWarForm({
                                    ...warForm,
                                    dispute: e.target.value,
                                })
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
                            value={warForm.reward}
                            variant="outlined"
                            onChange={(e) =>
                                setWarForm({
                                    ...warForm,
                                    reward: e.target.value,
                                })
                            }
                        />
                    </Box>
                    <Button onClick={() => dispatch(showWarPrompt())}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default TabPanel;
