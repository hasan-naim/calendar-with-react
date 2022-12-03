import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

function Day({ day, rowIndex }) {
  const [dayEvents, setDayEvents] = useState([]);
  ///context
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  /// states

  /// useefect
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );

    setDayEvents(events);
  }, [savedEvents, day]);

  // useEffect(() => {
  //   setSelectedEvent(null);
  // }, [day, setSelectedEvent]);

  //
  const currentDate = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-500 text-white rounded-full w-7"
      : "";
  };

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}

        <p className={`text-sm text-center p-1 my-1 ${currentDate()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          // setSelectedEvent(null);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, i) => {
          return (
            <div
              onClick={() => setSelectedEvent(evt)}
              key={i}
              className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
            >
              {evt.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Day;
