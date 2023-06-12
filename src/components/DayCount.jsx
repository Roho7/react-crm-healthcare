import React from "react";
import { FiShield } from "react-icons/fi";
import { Circle } from "rc-progress";
import "react-circular-progressbar/dist/styles.css";

function DayCount(props) {
  const patients = props.patient.data;
  const bedData = props.bed;
  console.log(patients.length);
  console.log(bedData.length);
  console.log("perc", Math.round((patients.length / bedData.length) * 100));

  return (
    <div className="p-4 border bg-slate-50 border-sky-200 rounded-3xl col-span-3">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="flex gap-1 max-w-max px-4 py-1 items-center justify-center text-sky-700 border border-sky-400 rounded-full font-semibold">
              <FiShield className="text-sky-400" />
              Admin Permission
            </p>

            <h1 className="text-4xl font-bold text-sky-900">
              Total Patients: {patients.length}
            </h1>
            <h1 className=" text-sky-900">
              Latest Admission:
              <span className="text-fuchsia-400">14/06/2023</span>
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center max-w-max">
            <Circle
              percent="10"
              strokeWidth="4"
              strokeColor="rgb(56 189 248)"
              trailColor="rgba(186 230 253)"
              trailWidth={4}
              className="w-3/4 -mb-36"
              gapDegree={180}
            ></Circle>
            <div className="text-sky-400 text-center font-bold">
              <p>Occupancy Status</p>
              {Math.round((patients.length / bedData.length) * 100) + "%"}
            </div>
          </div>
        </div>

        <h1 className="text-sky-700  font-bold">Recent Admissions</h1>
        <div className="border border-sky-200 p-2 rounded-lg">
          <table className="w-full">
            <thead className="font-bold">
              <tr>
                <td>Patient Name</td>
                <td align="right">Date of Admission</td>
                <td align="right">Gender</td>
                <td align="right">Age</td>
              </tr>
            </thead>
            <tbody>
              {patients
                .filter((row) => {
                  const today = new Date();
                  const dateAdm = row.DOA.toDate();
                  const timeDifference = Math.abs(today - dateAdm);
                  const daysDifference = Math.ceil(
                    timeDifference / (1000 * 60 * 60 * 24)
                  );
                  return daysDifference < 5;
                })
                .sort((a, b) => new Date(b.dateAdm) - new Date(a.dateAdm))
                .map((row) => (
                  <tr key={row.Name}>
                    <td component="th" scope="row">
                      {row.Name}
                    </td>
                    <td align="right">{row.DOA.toDate().toDateString()}</td>
                    <td align="right">{row.Gender}</td>
                    <td align="right">{row.Age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DayCount;
