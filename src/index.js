
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import Container from "./containers/Container";
import DarkChat from "./components/DarkChat";
import Discussion from "./components/Discussion";
import Photos from "./components/Photos";
import Roster from "./components/Roster";
import War from "./components/War";
import combineReducers from "./store/index";

const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <HashRouter>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Roster}></Route>
                        <Route exact path="/roster" component={Roster}></Route>
                        <Route exact path="/wars" component={War}></Route>
                        <Route
                            exact
                            path="/discussion"
                            component={Discussion}
                        ></Route>
                        <Route
                            exact
                            path="/darkchat"
                            component={DarkChat}
                        ></Route>
                        <Route exact path="/photos" component={Photos}></Route>
                    </Switch>
                </Container>
            </HashRouter>
        </Provider>
    </Fragment>,
    document.getElementById("root")
);
