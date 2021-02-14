import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Roster from "./Roster";
import War from "./War";
import Chat from "./Chat";

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/roster" component={Roster}></Route>
            <Route exact path="/war" component={War}></Route>
            <Route exact path="/chat" component={Chat}></Route>
        </Switch>
    );
};
