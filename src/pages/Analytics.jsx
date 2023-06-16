import React from "react";
import { LineChart } from "../components/LineChart";
import CurrentUser from "../components/CurrentUser";

function Analytics(props) {
  const db = props.data;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h1 className="text-5xl text-sky-900 mb-8">Analytics</h1>
        <CurrentUser />
      </div>

      <LineChart data={db} />
    </div>
  );
}

export default Analytics;
