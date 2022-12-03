import dayjs from "dayjs";
import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

/// reducer function

function savedEventReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storedEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
  return parsedEvents;
}

function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [daySelected, setDaySelected] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  /// reducer
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setSelectedEvent(null);
  }, [daySelected]);

  const val = {
    monthIndex,
    setMonthIndex,
    showEventModal,
    setShowEventModal,
    daySelected,
    setDaySelected,
    dispatchCalEvent,
    savedEvents,
    selectedEvent,
    setSelectedEvent,
  };
  return (
    <GlobalContext.Provider value={val}>{children}</GlobalContext.Provider>
  );
}

export default ContextWrapper;
