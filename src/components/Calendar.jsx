import React from "react";

function Calendar() {
  const today = new Date();
  return (
    <div className="container col-span-2 flex flex-col justify-between">
      <h1 className="text-3xl text-sky-900 font-bold mb-4">Calendar</h1>
    </div>
  );
}

export default Calendar;
