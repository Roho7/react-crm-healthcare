import React from "react";
import DayCount from "./dash-elements/DayCount";
import Chart from "./dash-elements/Chart";
import RadarChart from "./dash-elements/RadarChart";
import Calendar from "./dash-elements/Calendar";
import PieChart from "./dash-elements/PieChart";
import Graph from "./dash-elements/Graph";

function Dashboard() {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-2">
      <DayCount />
      <Calendar />
      {/* <Graph /> */}
      {/* <PieChart /> */}
      {/* <Chart /> */}
      {/* <RadarChart /> */}
    </div>
  );
}

export default Dashboard;
