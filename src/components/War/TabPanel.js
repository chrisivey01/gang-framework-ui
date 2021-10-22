import {Box, Button, Card, CardContent, TextField, Typography,} from "@material-ui/core";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {showWarPrompt} from "../../store/war/war.actions";

const Container = styled(Card)`
  margin: 10;
  background-color: #333 !important;
  color: #fff;

  .MuiButton-root {
    background-color: #212121,
    color: #fff,
  }
`;

const Wrapper = styled(Box)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
`;

const Text = styled(TextField)`
  color: #fff;

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 0, 0, 0.87) !important;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #fff !important;
  }

  .MuiOutlinedInput-root {
    color: #fff !important;
  }

  .MuiFormLabel-root {
    color: #fff !important;
  }
`;

const TabPanel = ({setWarForm, warForm}) => {
    const dispatch = useDispatch();
    const points = useSelector((state) => state.war.points);
    const gangText = useSelector((state) => state.war.gangText);

    return (
        <div
            role="tabpanel"
            id={`vertical-tabpanel-${points}`}
            aria-labelledby={`vertical-tab-${points}`}
            style={{flexGrow: 1}}
        >
            <Container elevation={3}>
                <CardContent>
                    <Typography variant="body2">
                        Gang Name: {gangText}
                    </Typography>
                    <Wrapper>
                        <Text
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
                    </Wrapper>
                    <Wrapper>
                        <Text
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
                    </Wrapper>
                    <Wrapper>
                        <Text
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
                    </Wrapper>
                    <Button
                        color="secondary"
                        onClick={() => dispatch(showWarPrompt())}
                    >
                        Submit
                    </Button>
                </CardContent>
            </Container>
        </div>
    );
};

export default TabPanel;
