import { Button } from "@material-ui/core";
import { Fragment } from "react";
import CharacterView from "../components/CharacterView";
import RosterList from "../components/RosterList";

const RosterContainer = () => {
    return (
        <Fragment>
            <RosterList />
            <CharacterView />       
        </Fragment>
    );
};

export default RosterContainer;
