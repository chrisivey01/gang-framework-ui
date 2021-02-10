import { Switch, Route } from "react-router-dom";
import DarkChat from "../components/DarkChat";
import Discussion from "../components/Discussion";
import Photos from "../components/Photos";
import Roster from "../components/Roster";
import War from "../components/War";

export default () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Roster}></Route>
                <Route exact path="/roster" component={Roster}></Route>
                <Route exact path="/wars" component={War}></Route>
                <Route exact path="/discussion" component={Discussion}></Route>
                <Route exact path="/darkchat" component={DarkChat}></Route>
                <Route exact path="/photos" component={Photos}></Route>
            </Switch>
        </div>
    );
};
