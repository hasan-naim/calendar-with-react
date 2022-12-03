import React, { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  daySelected: null,
  setDaySelected: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default GlobalContext;
