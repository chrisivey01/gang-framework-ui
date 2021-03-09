import { Card, CardHeader, Grid, makeStyles, Switch } from "@material-ui/core";
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
            textAlign: "center",
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
            width: "80%",
            padding: theme.spacing(1),
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
                <Grid item>Edit</Grid>
                <Grid item>
                    <Switch checked={isEdit} onChange={handleEditChange} />
                </Grid>
                <Grid item>Disable</Grid>
            </Grid>
            {process.env.NODE_ENV === "development" ? (
                <CardHeader className="header" title={"Boobs"} />
            ) : (
                <CardHeader className="header" title={roster[0].current_gang} />
            )}
            {renderIfNotNull()}
        </Card>
    );
};

export default withCharacterView(CharacterView);
