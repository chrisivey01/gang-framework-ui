import {
    Grid,
    Hidden,
    IconButton,
    makeStyles,
    Tooltip,
    Typography,
} from "@material-ui/core";
import ViewAgendaIcon from "@material-ui/icons/ViewAgendaOutlined";
import ViewConfigIcon from "@material-ui/icons/ViewComfyOutlined";
import ViewDayIcon from "@material-ui/icons/ViewDayOutlined";
import ViewWeekIcon from "@material-ui/icons/ViewWeekOutlined";
import clsx from "clsx";
import moment from "moment";
import PropTypes from "prop-types";
import React from "react";

const viewOptions = [
    {
        label: "Month",
        value: "dayGridMonth",
        icon: ViewConfigIcon,
    },
    {
        label: "Week",
        value: "timeGridWeek",
        icon: ViewWeekIcon,
    },
    {
        label: "Day",
        value: "timeGridDay",
        icon: ViewDayIcon,
    },
    {
        label: "Agenda",
        value: "listWeek",
        icon: ViewAgendaIcon,
    },
];

const useStyles = makeStyles(() => ({
    root: {},
}));

const CalendarToolbar = ({
    className,
    date,
    onDateNext,
    onDatePrev,
    onDateToday,
    onAddClick,
    onViewChange,
    view,
    ...rest
}) => {
    const classes = useStyles();

    return (
        <Grid
            className={clsx(classes.root, className)}
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
            {...rest}
        >
            <Hidden smDown>
                <Grid item>
                    <Typography variant="h5" color="initial">
                        {moment(date).format("MMMM YYYY")}
                    </Typography>
                </Grid>
                <Grid item>
                    {viewOptions.map((viewOption) => {
                        const Icon = viewOption.icon;

                        return (
                            <Tooltip
                                key={viewOption.value}
                                title={viewOption.label}
                            >
                                <IconButton
                                    color={
                                        viewOption.value === view
                                            ? "secondary"
                                            : "default"
                                    }
                                    onClick={() =>
                                        onViewChange(viewOption.value)
                                    }
                                >
                                    <Icon />
                                </IconButton>
                            </Tooltip>
                        );
                    })}
                </Grid>
            </Hidden>
        </Grid>
    );
};

CalendarToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
    onDateNext: PropTypes.func,
    onDatePrev: PropTypes.func,
    onDateToday: PropTypes.func,
    onAddClick: PropTypes.func,
    onViewChange: PropTypes.func,
    view: PropTypes.oneOf([
        "dayGridMonth",
        "timeGridWeek",
        "timeGridDay",
        "listWeek",
    ]),
};

CalendarToolbar.defaultProps = {
    onDateNext: () => {},
    onDatePrev: () => {},
    onDateToday: () => {},
    onAddClick: () => {},
    onViewChange: () => {},
};

export default CalendarToolbar;
