import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    Grid,
    makeStyles,
    MenuItem,
    TextField,
    Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import withCharacterView from "../hoc/withCharacterView";
import { changeRank } from "../store/roster/roster.actions";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 10px 10px 10px",
        width: "inherit",
        backgroundColor: "#333",
        color: "#fff",

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
            top: "55px",
            position: "relative",
        },
    },
}));

const CharacterView = ({renderIfNotNull}) => {
    const classes = useStyles();


    return (
        <Card className={classes.container}>
            {process.env.NODE_ENV === "development" ? (
                <CardHeader title={"Boobs"} />
            ) : (
                <CardHeader title={gangTitle} />
            )}
            {renderIfNotNull()}
        </Card>
    );
};

export default withCharacterView(CharacterView);
