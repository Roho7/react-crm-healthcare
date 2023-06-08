import React from "react";
import { Link, useParams } from "react-router-dom";
import patients from "../data/patient.json";
import PatientBill from "./PatientBill";
import CurrentUser from "../components/CurrentUser";

function PatientProfile(props) {
  const { id } = useParams();
  const patient = patients.find((patient) => patient.id === id);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <h1 className="text-5xl text-sky-900 mb-8">
          Patient Details <span className="text-sky-200">#{id}</span>
        </h1>
        <CurrentUser />
      </div>
      <h2 className="text-xl text-sky-50 mb-1 bg-sky-600 rounded-2xl p-2 max-w-max">
        Bed Number: {patient.bed}
      </h2>
      <div className="flex w-full container">
        <table className="w-full">
          <tbody>
            <tr className="details-row">
              <td className="row-head">Name</td>
              <td>{patient.name}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Date of Birth</td>
              <td>{patient.dateBirth}</td>
            </tr>

            <tr className="details-row">
              <td className="row-head">Gender</td>
              <td>{patient.gender}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Contact</td>
              <td>{patient.contact}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Email</td>
              <td>{patient.email}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Address</td>
              <td>{patient.address}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Medical History</td>
              <td>{patient.medicalHistory}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Financial Status</td>
              <td>{patient.financialStatus}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Marital Status</td>
              <td>{patient.maritalStatus}</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full">
          <tbody>
            <tr className="details-row">
              <td className="row-head">Age</td>
              <td>{patient.age}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Date of Admission</td>
              <td>{patient.dateAdm}</td>
            </tr>

            <tr className="details-row">
              <td className="row-head">ID Type</td>
              <td>{patient.idType}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">ID Proof</td>
              <td>{patient.idProof}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Local Guardian</td>
              <td>{patient.localGuardian}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Local Guardian Contact</td>
              <td>{patient.localGuardianContact}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Local Guardian ID</td>
              <td>{patient.localGuardianId}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Local Guardian Address</td>
              <td>{patient.localGuardianAddress}</td>
            </tr>
            <tr className="details-row">
              <td className="row-head">Addiction</td>
              <td>{patient.addiction}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <PatientBill id={id} />
    </div>
  );
}

export default PatientProfile;
