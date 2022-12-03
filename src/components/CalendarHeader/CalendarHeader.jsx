import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header className="flex px-4 py-2 items-center">
      <button
        className="mr-5 px-4 py-2 rounded border"
        onClick={() => setMonthIndex(dayjs().month())}
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h4 className="font-bold text-gray-500 text-xl">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h4>
    </header>
  );
}

export default CalendarHeader;
