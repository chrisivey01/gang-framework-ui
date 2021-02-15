import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Chat from "./components/Chat";
import Home from "./components/Home";
import Roster from "./components/Roster";
import War from "./components/War";
import Container from "./containers/Container";
import combineReducers from "./store/index";

const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <HashRouter>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/roster" component={Roster}></Route>
                        <Route exact path="/war" component={War}></Route>
                        <Route exact path="/chat" component={Chat}></Route>
                    </Switch>
                </Container>
            </HashRouter>
        </Provider>
    </Fragment>,
    document.getElementById("root")
);
