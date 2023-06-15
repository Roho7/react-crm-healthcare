import React from "react";
import { LineChart } from "../components/LineChart";

function Analytics(props) {
  const db = props.data;

  return (
    <div>
      <LineChart data={db} />
    </div>
  );
}

export default Analytics;
