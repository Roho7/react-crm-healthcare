import React from "react";
import { FiCalendar } from "react-icons/fi";

import { BsFilePersonFill } from "react-icons/bs";

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
                <span className="font-bold text-sky-100 flex items-center gap-2">
                  New Patient
                  <BsFilePersonFill />
                </span>
                <p className=" text-sky-200">
                  <span className=" text-fuchsia-200">{patient.Name} </span> was
                  admitted
                </p>
              </div>
              <p className="font-bold text-sky-100">
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
