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
            <>
              <span className="text-xl text-sky-50 mb-1 bg-sky-600 rounded-2xl p-2 max-w-max">
                Bed Number: {patient.Bed}
              </span>
              <div className="flex w-full container" key={patient.id}>
                <table className="w-full">
                  <tbody>
                    <tr className="details-row">
                      <td className="row-head">Name</td>
                      <td>{patient.Name}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Age</td>
                      <td>{patient.Age}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">DOB</td>
                      <td>{patient.DOB.toDate().toDateString()}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">DOA</td>
                      <td>{patient.DOA.toDate().toDateString()}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Financial Status</td>
                      <td>{patient.FinancialStatus}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Local Guardian</td>
                      <td>{patient.LocalGuardianName}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <tbody>
                    <tr className="details-row">
                      <td className="row-head">Gender</td>
                      <td>{patient.Gender}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Email</td>
                      <td>{patient.Email}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Mobile</td>
                      <td>{patient.Mobile}</td>
                    </tr>
                    <tr className="details-row">
                      <td className="row-head">Address</td>
                      <td>{patient.Address}</td>
                    </tr>
                    <tr className="details-row">
                      {" "}
                      <td className="row-head"> Marital Status</td>
                      <td>{patient.MaritalStatus}</td>
                    </tr>
                    <tr className="details-row">
                      {" "}
                      <td className="row-head"> Local Guardian Contact</td>
                      <td>{patient.LocalGuardianContact}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          );
        })}

      <PatientBill id={id} />
    </div>
  );
}

export default PatientProfile;
