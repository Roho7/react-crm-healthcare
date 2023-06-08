import React, { useState } from "react";
import DayCount from "./dash-elements/DayCount";
import Calendar from "./dash-elements/Calendar";
import BedCount from "./dash-elements/BedCount";
import CurrentUser from "./components/CurrentUser";

function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="text-5xl mb-8">Dashboard</h1>
        <CurrentUser />
      </div>

      <div className="grid grid-cols-5 grid-flow-row gap-2">
        <DayCount />
        <Calendar />
        <BedCount />
      </div>
    </div>
  );
}

export default Dashboard;
