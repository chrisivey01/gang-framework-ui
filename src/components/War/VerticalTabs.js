import { Tab, Tabs } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import gangs from "../../helpers/gangwar.json";
import { updatePanel } from "../../store/war/war.actions";

const VerticalTabs = () => {
    const dispatch = useDispatch();
    const panel = useSelector((state) => state.war.panel);
    const character = useSelector((state) => state.darkWeb.character);

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={panel - 1}
            onChange={(event, value) => dispatch(updatePanel(value + 1))}
        >
            {gangs.map((gang, i) => {
                if (character.current_gang !== gang.name) {
                    return <Tab key={i} label={gang.name} />;
                }
            })}
        </Tabs>
    );
};

export default VerticalTabs;
