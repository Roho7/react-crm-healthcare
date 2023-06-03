import React from "react";
import { FiShield } from "react-icons/fi";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import patient from "../data/patient.json";

const bedsLeft = (patient.length / 30) * 100;

function DayCount() {
  console.log(patient.length);
  return (
    <div className="p-4 border bg-slate-50 border-sky-200 rounded-3xl col-span-3">
      <div className="flex flex-col gap-4">
        <div className="flex gap-10">
          <CircularProgressbar
            value={bedsLeft}
            text={patient.length + " Patients"}
            strokeWidth={10}
          />
          <div className="flex flex-col gap-2">
            <p className="flex gap-1 w-1/2 items-center justify-center text-sky-700 border border-sky-400 rounded-2xl p-1 font-semibold">
              <FiShield className="text-sky-400" />
              Premium Plan
            </p>

            <h1 className="text-4xl font-bold text-sky-900">
              Occupancy Status
            </h1>
            <h1 className=" text-sky-900">
              Latest Admission:{" "}
              <span className="text-fuchsia-400">14/04/23</span>
            </h1>
          </div>
        </div>

        <h1 className="text-sky-900  font-bold">Recent Admissions</h1>
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
              {patient
                .filter((row) => {
                  const today = new Date();
                  const dateAdm = new Date(row.dateAdm);
                  const timeDifference = Math.abs(today - dateAdm);
                  const daysDifference = Math.ceil(
                    timeDifference / (1000 * 60 * 60 * 24)
                  );
                  return daysDifference <= 24;
                })
                .sort((a, b) => new Date(b.dateAdm) - new Date(a.dateAdm))
                .map((row) => (
                  <tr
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <td component="th" scope="row">
                      {row.name}
                    </td>
                    <td align="right">{row.dateAdm}</td>
                    <td align="right">{row.gender}</td>
                    <td align="right">{row.age}</td>
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
