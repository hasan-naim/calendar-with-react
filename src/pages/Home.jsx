import { useContext, useEffect, useState } from "react";
import CalendarHeader from "../components/CalendarHeader/CalendarHeader";
import EventModal from "../components/EventModal/EventModal";
import Month from "../components/Month/Month";
import Sidebar from "../components/Sidebar/Sidebar";
import GlobalContext from "../contexts/GlobalContext";

import { getMonth } from "../utilits/utilits";

function Home() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
      {showEventModal && <EventModal />}
    </>
  );
}

export default Home;
