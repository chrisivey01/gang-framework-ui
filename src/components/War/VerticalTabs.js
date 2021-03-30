import { Tab, Tabs } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import gangs from "../../helpers/gangwar.json";
import { updatePanel } from "../../store/war/war.actions";

const VerticalTabs = () => {
    const dispatch = useDispatch();
    const panel = useSelector((state) => state.war.panel);
    const character = useSelector((state) => state.gang.character);
    const gangs = useSelector((state) => state.gang.gangs);
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={panel - 1}
            onChange={(event, value) => dispatch(updatePanel(value + 1, event.target.textContent))}
        >
            {process.env.NODE_ENV === "development"
                ? Object.keys(gangs).map((gang, i) => {
                      if (character.current_gang !== gang) {
                          return <Tab key={i} label={gang} />;
                      }
                  })
                : Object.keys(gangs).sort().map((gang, i) => {
                      if (character.current_gang !== gang) {
                          return <Tab key={i} label={gang} />;
                      }
                  })}
        </Tabs>
    );
};

export default VerticalTabs;
