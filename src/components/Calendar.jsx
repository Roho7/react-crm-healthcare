import React from "react";
import { FiCalendar } from "react-icons/fi";

function Calendar(props) {
  const today = new Date();
  const patients = props.patient.data;
  return (
    <div className="container col-span-2">
      <h1 className="text-3xl text-sky-900 font-bold mb-4 flex gap-4 items-center">
        Important Dates <FiCalendar size={24} />
      </h1>
      <div className=" flex flex-col h-56 overflow-y-scroll">
        {patients.map((patient) => {
          return (
            <div className="imp-date-box mb-2" key={patient.id}>
              <div>
                <p className="font-bold text-sky-900">New Patient</p>
                <p className=" text-sky-700">{patient.Name} was admitted</p>
              </div>
              <p className="font-bold text-fuchsia-400">
                {patient.DOA.toDate().toDateString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
