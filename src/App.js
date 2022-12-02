import { useState } from "react";
import "./App.css";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";
import Month from "./components/Month/Month";
import Sidebar from "./components/Sidebar/Sidebar";

import { getMonth } from "./utilits/utilits";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
