import { Switch, Route } from "react-router-dom";
import Roster from "./Roster";
import War from "./War";

export default () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Roster}></Route>
                <Route exact path="/roster" component={Roster}></Route>
                <Route exact path="/war" component={War}></Route>
                <Route exact path="/war" component={War}></Route>
            </Switch>
        </div>
    );
};
