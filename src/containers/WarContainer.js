import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabPanel from "../components/War/TabPanel";
import VerticalTabs from "../components/War/VerticalTabs";
import WarDialog from "../components/War/WarDialog";
import {
    closeWarPrompt,
    sendWarPrompt,
    acceptWarRequest,
} from "../store/war/war.actions";

const WarContainer = () => {
    const dispatch = useDispatch();
    const [warForm, setWarForm] = useState({
        points: 0,
        dispute: "",
        reward: "",
    });
    const character = useSelector((state) => state.gang.character);
    const gangText = useSelector((state) => state.war.gangText);
    const showWarPrompt = useSelector((state) => state.war.showWarPrompt);
    const showWarRequest = useSelector((state) => state.war.showWarRequest);
    const gangs = useSelector((state) => state.gang.gangs);

    const handleWarData = () => {
        dispatch(sendWarPrompt(character, gangText, warForm));
        setWarForm({ ...warForm, points: 0, dispute: "", reward: "" });
        dispatch(closeWarPrompt());
    };

    const acceptWar = () => {
        dispatch(acceptWarRequest(showWarRequest, gangs));
        dispatch(closeWarPrompt());
    };

    return (
        <Grid container>
            <VerticalTabs />
            <TabPanel setWarForm={setWarForm} warForm={warForm} />
            <WarDialog
                handleData={handleWarData}
                showDialog={showWarPrompt}
                text={
                    "Declaring a gang war is a big deal. Are you sure you want this?"
                }
                title={"Gang War Declaration"}
                closePrompt={closeWarPrompt}
            />
            <WarDialog
                handleData={acceptWar}
                showDialog={showWarRequest.show}
                text={
                    "Are you ready to go to war with " +
                    showWarRequest.gangFrom +
                    "?"
                }
                title={"War Request"}
                closePrompt={closeWarPrompt}
            />
        </Grid>
    );
};

export default WarContainer;
