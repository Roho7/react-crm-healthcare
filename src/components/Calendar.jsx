import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Calendar() {
  const today = new Date();
  return (
    <div className="container col-span-2 flex flex-col justify-between">
      <h1 className="text-3xl text-sky-900 font-bold mb-4">Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={dayjs(today)}
          sx={{
            padding: "0px",
            margin: "0px",
            width: "100%",
            height: "100%",
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;
