import {Card, CardHeader, makeStyles} from "@material-ui/core";
import {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EditDisableSwitch from "./EditDisableSwitch";
import Excommunicado from "./Excommunicado";
import PickCharacter from "./PickCharacter";
import View from "./View";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 10px 10px 10px",
        width: "inherit",
        backgroundColor: "#333",
        color: "#fff",
        height: "650px",
        overflow: "auto",

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

const RosterView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const roster = useSelector((state) => state.gang.roster);
    const character = useSelector((state) => state.gang.character);
    const gangMember = useSelector((state) => state.gang.gangMember);
    const gangCap = useSelector((state) => state.gang.gangCap);
    const [isEdit, setIsEdit] = useState(true);
    const [member, setMember] = useState({});

    useEffect(() => {
        setMember(gangMember);
    }, [gangMember]);

    const handleEditChange = () => {
        setIsEdit(!isEdit);
    };

    if (roster[0]) {

        return (
            <Card className={classes.container}>
                {character.gang_rank === 4 ? (
                    <EditDisableSwitch
                        isEdit={isEdit}
                        handleEditChange={handleEditChange}
                    />
                ) : (
                    <Fragment/>
                )}

                <CardHeader
                    className="header"
                    title={roster[0].current_gang}
                    subheader={"Member count: " + roster.length + "/" + gangCap}
                />

                {Object.keys(member).length > 0 ? (
                    <Fragment>
                        <View
                            character={character}
                            isEdit={isEdit}
                            roster={roster}
                            dispatch={dispatch}
                            setMember={setMember}
                            member={member}
                        />
                        <Excommunicado/>
                    </Fragment>
                ) : (
                    <PickCharacter/>
                )}
            </Card>
        );
    } else {
        return <></>
    }
};

export default RosterView;
