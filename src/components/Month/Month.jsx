import React from "react";
import Day from "../Day/Day";

function Month({ month }) {
  return (
    <div className="flex-1 grid grid-cols-7  grid-rows-5">
      {month.map((row, i) => {
        return (
          <React.Fragment key={i}>
            {row.map((day, index) => {
              return <Day day={day} key={index} rowIndex={i} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Month;
