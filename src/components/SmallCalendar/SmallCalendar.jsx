import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { getMonth } from "../../utilits/utilits";

function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };
  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p>
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
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
      </header>
    </div>
  );
}

export default SmallCalendar;
