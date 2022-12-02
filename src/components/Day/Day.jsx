import dayjs from "dayjs";
import React from "react";

function Day({ day, rowIndex }) {
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
    </div>
  );
}

export default Day;
