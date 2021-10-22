import {Tab, Tabs} from "@material-ui/core";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updatePanel} from "../../store/war/war.actions";

const VerticalTabs = () => {
    const dispatch = useDispatch();
    const points = useSelector((state) => state.war.points);
    const character = useSelector((state) => state.gang.character);
    const gangs = useSelector((state) => state.gang.gangs);

    useEffect(() => {
        const firstSelected = Object.keys(gangs)
            .sort()
            .filter((gang) => gang !== character.current_gang);
        dispatch(updatePanel(0, firstSelected[0]));
    }, []);

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={points}
            onChange={(event, value) =>
                dispatch(updatePanel(value, event.target.textContent))
            }
        >
            {process.env.NODE_ENV === "development"
                ? Object.keys(gangs)
                    .sort()
                    .map((gang, i) => {
                        if (character.current_gang !== gang) {
                            return <Tab key={i} label={gang}/>;
                        }
                    })
                : Object.keys(gangs)
                    .sort()
                    .map((gang, i) => {
                        if (character.current_gang !== gang) {
                            return <Tab key={i} label={gang}/>;
                        }
                    })}
        </Tabs>
    );
};

export default VerticalTabs;
