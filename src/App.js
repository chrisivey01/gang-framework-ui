import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import Store from "./components/Store/Store";
import WarContainer from "./containers/WarContainer";
import Container from "./containers/Container";
import RosterContainer from "./containers/RosterContainer";
import CalendarView from "./components/Calendar/CalendarView";
import GangRecruit from "./components/GangRecruit";
import GangWarScore from "./components/GangWarScore";
import WarDialog from "./components/War/WarDialog";
import { acceptWarRequest, closeWarPrompt } from "./store/war/war.actions";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { SnackbarProvider } from "notistack";
import MomentUtils from "@date-io/moment";

const App = () => {
    const dispatch = useDispatch();
    const showWarRequest = useSelector((state) => state.war.showWarRequest);
    const gangs = useSelector((state) => state.gang.gangs);

    const acceptWar = () => {
        dispatch(acceptWarRequest(showWarRequest, gangs));
    };

    return (
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
                    <GangWarScore />
                    {showWarRequest.warForm ? (
                        <WarDialog
                            handleData={acceptWar}
                            showDialog={showWarRequest.show}
                            gangFrom={showWarRequest.gangFrom}
                            dispute={showWarRequest.warForm.dispute}
                            terms={showWarRequest.warForm.terms}
                            reward={showWarRequest.warForm.reward}
                            title={"War Request"}
                            closePrompt={closeWarPrompt}
                        />
                    ) : (
                        <></>
                    )}
                </HashRouter>
            </SnackbarProvider>
        </MuiPickersUtilsProvider>
    );
};

export default App;
