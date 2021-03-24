import { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { SnackbarProvider } from "notistack";
import MomentUtils from "@date-io/moment";

import logger from "redux-logger";
import thunk from "redux-thunk";
import Store from "./components/Store/Store";
import WarContainer from "./containers/WarContainer";
import Container from "./containers/Container";
import combineReducers from "./store/index";
import "@fontsource/roboto";
import RosterContainer from "./containers/RosterContainer";
import CalendarView from "./components/Calendar/CalendarView";
import GangRecruit from "./components/GangRecruit";
const middle = [thunk, logger];
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <SnackbarProvider dense maxSnack={3}>
                    <HashRouter>
                        <Container>
                            <Switch>
                                <Route exact path="/" component={Store}></Route>
                                <Route
                                    exact
                                    path="/roster"
                                    component={RosterContainer}
                                ></Route>
                                <Route
                                    exact
                                    path="/war"
                                    component={WarContainer}
                                ></Route>
                                <Route
                                    exact
                                    path="/chat"
                                    component={CalendarView}
                                ></Route>
                            </Switch>
                        </Container>
                        <GangRecruit />
                    </HashRouter>
                </SnackbarProvider>
            </MuiPickersUtilsProvider>
        </Provider>
    </Fragment>,
    document.getElementById("root")
);
