import { Button, Grid, makeStyles, SvgIcon } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { PlusCircle as PlusCircleIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
    root: {},
    action: {
        marginBottom: theme.spacing(1),
        "& + &": {
            marginLeft: theme.spacing(1),
        },
    },
}));

const CalendarHeader = ({ className, onAddClick, ...rest }) => {
    const classes = useStyles();

    return (
        <Grid
            className={clsx(classes.root, className)}
            container
            justify="space-between"
            spacing={3}
            {...rest}
        >
            <Grid item>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={onAddClick}
                    className={classes.action}
                    startIcon={
                        <SvgIcon fontSize="small">
                            <PlusCircleIcon />
                        </SvgIcon>
                    }
                >
                    New Event
                </Button>
            </Grid>
        </Grid>
    );
};

CalendarHeader.propTypes = {
    className: PropTypes.string,
    onAddClick: PropTypes.func,
};

CalendarHeader.defaultProps = {
    onAddClick: () => {},
};

export default CalendarHeader;
