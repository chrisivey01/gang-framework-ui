import { Card, CardHeader, Grid, makeStyles, Switch } from "@material-ui/core";
import { useSelector } from "react-redux";
import withRoster from "../../hoc/withRoster";
import EditDisableSwitch from "./EditDisableSwitch";
import Excommunicado from "./Excommunicado";

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
        "& .MuiTypography-root": {
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
            top: "30px",
            position: "relative",
        },
    },
}));

const RosterView = ({ renderIfNotNull, handleEditChange, isEdit }) => {
    const classes = useStyles();
    const roster = useSelector((state) => state.gang.roster);
    const gangCap = useSelector((state) => state.gang.gangCap);

    return (
        <Card className={classes.container}>
            <EditDisableSwitch
                isEdit={isEdit}
                handleEditChange={handleEditChange}
            />
            {process.env.NODE_ENV === "development" ? (
                <CardHeader
                    className="header"
                    title={"Boobs"}
                    subheader={"Member count: " + roster.length + "/" + gangCap}
                />
            ) : (
                <CardHeader
                    className="header"
                    title={roster[0].current_gang}
                    subheader={"Member count: " + roster.length + "/" + gangCap}
                />
            )}
            {renderIfNotNull()}
            <Excommunicado />
        </Card>
    );
};

export default withRoster(RosterView);
