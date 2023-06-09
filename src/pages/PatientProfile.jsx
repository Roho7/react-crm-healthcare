import React from "react";
import { useParams } from "react-router-dom";
import PatientBill from "../components/PatientBill";
import CurrentUser from "../components/CurrentUser";

function PatientProfile(props) {
  const db = props.data;

  const { id } = useParams();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h1 className="text-5xl text-sky-900 mb-8">
          Patient Details <span className="text-sky-200">#{id}</span>
        </h1>
        <CurrentUser />
      </div>

      {db
        .filter((patient) => patient.id === id)
        .map((patient) => {
          return (
            <div className="flex flex-col w-full container" key={patient.id}>
              <span className="text-xl text-sky-50 mb-1 bg-sky-600 rounded-2xl p-2 max-w-max">
                Bed Number: {db.Bed}
              </span>
              <table className="w-full">
                <thead className="font-bold">
                  <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                    <td>Date of Birth</td>
                    <td>Date of Admission</td>
                    <td>Mobile Number</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{patient.Name}</td>
                    <td>{patient.Age}</td>
                    <td>{patient.Address}</td>
                    <td>{patient.DOB.toDate().toDateString()}</td>
                    <td>{patient.DOA.toDate().toDateString()}</td>
                    <td>{patient.Mobile}</td>
                  </tr>
                </tbody>
                <thead className="font-bold">
                  <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                    <td>Date of Birth</td>
                    <td>Date of Admission</td>
                    <td>Mobile Number</td>
                  </tr>
                </thead>
                <tbody>
                  <tr key={patient.id}>
                    <td>{patient.Name}</td>
                    <td>{patient.Age}</td>
                    <td>{patient.Address}</td>
                    <td>{patient.DOB.toDate().toDateString()}</td>
                    <td>{patient.DOA.toDate().toDateString()}</td>
                    <td>{patient.Mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}

      <PatientBill id={id} />
    </div>
  );
}

export default PatientProfile;
