import { Button } from "@material-ui/core";
import { Fragment } from "react";
import RosterView from "../components/Roster/RosterView";
import RosterList from "../components/Roster/RosterList";
import Excommunicado from "../components/Roster/Excommunicado";

const RosterContainer = () => {
    return (
        <Fragment>
            <RosterList />
            <RosterView />    
        </Fragment>
    );
};

export default RosterContainer;
