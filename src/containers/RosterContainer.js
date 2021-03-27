import { Fragment } from "react";
import RosterList from "../components/Roster/RosterList";
import RosterView from "../components/Roster/RosterView";

const RosterContainer = () => {
    return (
        <Fragment>
            <RosterList />
            <RosterView />
        </Fragment>
    );
};

export default RosterContainer;
