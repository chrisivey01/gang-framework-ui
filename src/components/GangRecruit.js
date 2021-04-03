import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScriptImage from "../assets/png/script.png";
import CheckIcon from "../assets/svg/check.svg";
import XIcon from "../assets/svg/x.svg";
import { denyGang, joinGang } from "../store/roster/roster.actions";

const useStyles = makeStyles((theme) => ({
    script: {
        position: "fixed",
        width: 750,
        height: 500,
        top: "25%",
        left: "25%",
        zIndex: 1,

        "& .svg": {
            width: 50,
            height: 50,
        },

        "& .script-wrapper": {
            top: "330px",
            left: "535px",
            position: "fixed",
        },

        "& .wrapper-button": {
            justifyContent: "center",
        },
    },
}));

const GangRecruit = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const invite = useSelector((state) => state.gang.invite);

    return (
        <Fragment>
            {invite.show ? (
                <Grid className={classes.script}>
                    <img
                        src={ScriptImage}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <Box className="script-wrapper">
                        <Grid>
                            <Typography style={{ fontSize: "35px" }}>
                                Do you wish to join {invite.name}?
                            </Typography>
                        </Grid>
                        <Grid container className="wrapper-button">
                            <Grid>
                                <Button
                                    style={{ margin: "20px" }}
                                    onClick={() =>
                                        dispatch(joinGang(invite.name))
                                    }
                                >
                                    <Typography>Yes</Typography>
                                    <img className="svg" src={CheckIcon}></img>
                                </Button>
                                <Button
                                    style={{ margin: "20px" }}
                                    onClick={() => dispatch(denyGang())}
                                >
                                    <Typography>No</Typography>
                                    <img className="svg" src={XIcon}></img>
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            ) : null}
        </Fragment>
    );
};

export default GangRecruit;
