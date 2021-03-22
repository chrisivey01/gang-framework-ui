import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";
import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timelinePlugin from "@fullcalendar/timeline";
import {
    Container,
    Dialog,
    Paper,
    useTheme,
    useMediaQuery,
    makeStyles,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
    getEvents,
    updateEvent,
    selectEvent,
    selectRange,
    openModal,
    closeModal,
} from "../../store/calendar/calendar.actions";
import CalendarAddEvent from "./CalendarAddEvent";
import CalendarHeader from "./CalendarHeader";
import CalendarToolbar from "./CalendarToolbar";
import { Fragment } from "react";

const selectedEventSelector = (state) => {
    const { events, selectedEventId } = state.calendar;

    if (selectedEventId) {
        return events.find((_event) => _event.id === parseInt(selectedEventId));
    } else {
        return null;
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        paddingBottom: theme.spacing(3),
    },
    calendar: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        minHeight: 435,

        "& .fc-unthemed .fc-head": {
            backgroundColor: theme.palette.background.dark,
        },
        "& .fc-unthemed .fc-body": {
            backgroundColor: theme.palette.background.default,
        },
        "& .fc-unthemed .fc-row": {
            borderColor: theme.palette.divider,
            height: "35px !important",
        },
        "& .fc-unthemed .fc-axis": {
            ...theme.typography.body2,
        },
        "& .fc-unthemed .fc-divider": {
            backgroundColor: theme.palette.background.dark,
            borderColor: theme.palette.divider,
        },
        "& .fc-unthemed th": {
            borderColor: theme.palette.divider,
        },
        "& .fc-unthemed td": {
            borderColor: theme.palette.divider,
        },
        "& .fc-unthemed td.fc-today": {
            backgroundColor: theme.palette.background.dark,
        },
        "& .fc-unthemed .fc-highlight": {
            backgroundColor: theme.palette.background.dark,
        },
        "& .fc-unthemed .fc-event": {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            borderWidth: 2,
            opacity: 0.9,
            "& .fc-time": {
                color: "inherit",
            },
            "& .fc-title": {
                color: "inherit",
            },
        },
        "& .fc-unthemed .fc-day-top": {
            ...theme.typography.body2,
        },
        "& .fc-unthemed .fc-day-header": {
            ...theme.typography.subtitle2,
            fontWeight: theme.typography.fontWeightMedium,
            color: theme.palette.text.secondary,
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.dark,
        },
        "& .fc-unthemed .fc-list-view": {
            borderColor: theme.palette.divider,
        },
        "& .fc-unthemed .fc-list-empty": {
            ...theme.typography.subtitle1,
        },
        "& .fc-unthemed .fc-list-heading td": {
            backgroundColor: theme.palette.background.dark,
            borderColor: theme.palette.divider,
        },
        "& .fc-unthemed .fc-list-heading-main": {
            ...theme.typography.h6,
        },
        "& .fc-unthemed .fc-list-heading-alt": {
            ...theme.typography.h6,
        },
        "& .fc-unthemed .fc-list-item:hover td": {
            backgroundColor: theme.palette.background.dark,
        },
        "& .fc-unthemed .fc-list-item-title": {
            ...theme.typography.body1,
        },
        "& .fc-unthemed .fc-list-item-time": {
            ...theme.typography.body2,
        },
    },
}));

const CalendarView = () => {
    const classes = useStyles();
    const calendarRef = useRef(null);
    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
    const dispatch = useDispatch();

    const events = useSelector((state) => state.calendar.events);
    const isModalOpen = useSelector((state) => state.calendar.isModalOpen);
    const selectedRange = useSelector((state) => state.calendar.selectedRange);

    const selectedEvent = useSelector(selectedEventSelector);
    const [date, setDate] = useState(moment().toDate());
    const [view, setView] = useState(
        mobileDevice ? "listWeek" : "dayGridMonth"
    );

    const handleDateToday = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.today();
            setDate(calendarApi.getDate());
        }
    };

    const handleViewChange = (newView) => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.changeView(newView);
            setView(newView);
        }
    };

    const handleDatePrev = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.prev();
            setDate(calendarApi.getDate());
        }
    };

    const handleDateNext = () => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.next();
            setDate(calendarApi.getDate());
        }
    };

    const handleAddClick = () => {
        dispatch(openModal());
    };

    const handleRangeSelect = (arg) => {
        const calendarEl = calendarRef.current;

        if (calendarEl) {
            const calendarApi = calendarEl.getApi();

            calendarApi.unselect();
        }

        dispatch(selectRange(arg.start, arg.end));
    };

    const handleEventSelect = (arg) => {
        dispatch(selectEvent(arg.event.id));
    };

    const handleEventResize = async ({ event }) => {
        try {
            await dispatch(
                updateEvent(event.id, {
                    allDay: event.allDay,
                    start: event.start,
                    end: event.end,
                })
            );
        } catch (err) {
            console.error(err);
        }
    };

    const handleEventDrop = async ({ event }) => {
        try {
            await dispatch(
                updateEvent(event.id, {
                    allDay: event.allDay,
                    start: event.start,
                    end: event.end,
                })
            );
        } catch (err) {
            console.error(err);
        }
    };

    const handleModalClose = () => {
        dispatch(closeModal());
    };

    useEffect(() => {
        dispatch(getEvents(events));
    }, []);

    return (
        <Fragment>
            <Container
                maxWidth={false}
                className={classes.root}
                title="Calendar"
            >
                <CalendarToolbar
                    date={date}
                    onDateNext={handleDateNext}
                    onDatePrev={handleDatePrev}
                    onDateToday={handleDateToday}
                    onViewChange={handleViewChange}
                    view={view}
                />
                <Paper className={classes.calendar}>
                    <FullCalendar
                        allDayMaintainDuration
                        defaultDate={date}
                        defaultView={view}
                        droppable
                        editable
                        eventClick={handleEventSelect}
                        eventDrop={handleEventDrop}
                        eventLimit
                        eventResizableFromStart
                        eventResize={handleEventResize}
                        events={events}
                        header={false}
                        height={425}
                        ref={calendarRef}
                        rerenderDelay={10}
                        select={handleRangeSelect}
                        selectable
                        weekends
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                            timelinePlugin,
                        ]}
                    />
                </Paper>
                <Dialog
                    maxWidth="sm"
                    fullWidth
                    onClose={handleModalClose}
                    open={isModalOpen}
                >
                    {/* Dialog renders its body even if not open */}
                    {isModalOpen && (
                        <CalendarAddEvent
                            event={selectedEvent}
                            range={selectedRange}
                            onAddComplete={handleModalClose}
                            onCancel={handleModalClose}
                            onDeleteComplete={handleModalClose}
                            onEditComplete={handleModalClose}
                        />
                    )}
                </Dialog>
                <CalendarHeader onAddClick={handleAddClick} />
            </Container>
        </Fragment>
    );
};

export default CalendarView;
