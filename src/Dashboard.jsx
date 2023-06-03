import React, { useState } from "react";
import DayCount from "./dash-elements/DayCount";

import Calendar from "./dash-elements/Calendar";
import BedCount from "./dash-elements/BedCount";

function Dashboard() {
  return (
    <div>
      <h1 className="text-5xl text-sky-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-2">
        <DayCount />
        <Calendar />
        <BedCount />
      </div>
    </div>
  );
}

export default Dashboard;
