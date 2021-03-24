import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useSelector } from "react-redux";

const TabPanel = ({ children, value, index }) => {
    const panel = useSelector((state) => state.war.panel);

    return (
        <div
            role="tabpanel"
            hidden={panel !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ flexGrow: 1 }}
        >
            {panel === index && (
                children
            )}
        </div>
    );
};

export default TabPanel;
