import {
    Card,
    CardHeader,
    Grid,
    makeStyles,
    Switch,
    Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import withCharacterView from "../hoc/withCharacterView";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 10px 10px 10px",
        width: "inherit",
        backgroundColor: "#333",
        color: "#fff",

        "& .edit": {
            justifyContent: "flex-end",
            paddingRight: 10,
        },

        "& .wrapper-text": {
            width: "225px",
        },

        "& .wrapper-box": {
            marginTop: "7px",

            "& .submit-button": {
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 30,

                "& .MuiButton-root": {
                    color: "#fff",
                    backgroundColor: "#212121",
                },
            },
        },
        "& .wrapper-image": {
            width: "300px",
            height: "300px",

            "& img": {
                objectFit: "contain",
                height: "100%",
                width: "100%",
            },
        },

        "& .margin": {
            margin: theme.spacing(1),
        },
        "& .inputLabel": {
            fontSize: 12,
            height: 20,
        },
        "& .MuiInputLabel-root": {
            color: "#fff",
        },
        "& .MuiInputBase-root": {
            color: "#fff",
            fontSize: 12,
            backgroundColor: "#212121",
        },
        "& .MuiFilledInput-underline:after": {
            borderBottom: "#fff",
        },
        "& .backstory": {
            width: 400,
        },
        "& .excommunicado": {
            display: "flex",
            justifyContent: "flex-end",
            top: "50px",
            position: "relative",
        },
    },
}));

const CharacterView = ({ renderIfNotNull, handleEditChange, isEdit }) => {
    const classes = useStyles();
    const roster = useSelector((state) => state.gang.roster);

    return (
        <Card className={classes.container}>
            <Grid container alignItems="center" className="edit">
                <Grid item>Disable</Grid>
                <Grid item>
                    <Switch checked={isEdit} onChange={handleEditChange} />
                </Grid>
                <Grid item>Edit</Grid>
            </Grid>
            {process.env.NODE_ENV === "development" ? (
                <CardHeader title={"Boobs"} />
            ) : (
                <CardHeader title={roster[0].current_gang} />
            )}
            {renderIfNotNull()}
        </Card>
    );
};

export default withCharacterView(CharacterView);
