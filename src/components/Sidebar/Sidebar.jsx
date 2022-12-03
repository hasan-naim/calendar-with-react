import React from "react";
import CreateButton from "../CreateButton/CreateButton";
import SmallCalendar from "../SmallCalendar/SmallCalendar";

function Sidebar() {
  return (
    <div className="border p-5 w-64 ">
      <CreateButton />
      <SmallCalendar />
    </div>
  );
}

export default Sidebar;
