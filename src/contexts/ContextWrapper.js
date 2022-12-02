import dayjs from "dayjs";
import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  const val = {
    monthIndex,
    setMonthIndex,
  };
  return (
    <GlobalContext.Provider value={val}>{children}</GlobalContext.Provider>
  );
}

export default ContextWrapper;
