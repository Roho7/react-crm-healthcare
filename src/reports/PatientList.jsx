import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import patient from "../data/patient.json";
import AddPatient from "../modal/AddPatient";
import { nanoid } from "nanoid";
import { FiPlusCircle } from "react-icons/fi";
import CurrentUser from "../components/CurrentUser";

function PatientList() {
  // Patient Row Rendering
  const [patientRow, setPatientRow] = useState(patient);

  const handleModalSubmit = (newRow) => {
    setPatientRow([...patientRow, newRow]);
  };

  // Set Checkbox component
  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState([]);

  function checkAll(event) {
    const isChecked = event.target.checked;

    setAllChecked(isChecked);
    if (isChecked) {
      setChecked(patient.map((item) => item.id));
    } else {
      setChecked([]);
    }
  }

  function check(e, itemId) {
    const isChecked = e.target.checked;
    if (isChecked) {
      setChecked([...checked, itemId]);
    } else {
      setChecked(checked.filter((id) => id !== itemId));
    }
  }

  // Link to patient report URL
  const navigate = useNavigate();
  function patientProfileLink(id) {
    navigate(`patients/${id}`);
  }

  // Set Modal Component
  const [modalOpen, setModalOpen] = useState(false);
  function handleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      {modalOpen && (
        <AddPatient
          closeModal={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
      )}
      <div>
        <div className="flex justify-between items-start">
          <h1 className="text-5xl text-sky-900 mb-8">All Patients</h1>
          <CurrentUser />
        </div>
        <button className="mb-2" onClick={handleModal}>
          <FiPlusCircle />
          <span>Add New Patient</span>
        </button>
        <div className="container">
          <table className="w-full">
            <thead className="font-bold">
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={checkAll}
                  />
                </td>
                <td>Patient Name</td>
                <td>Age</td>
                <td>Gender</td>
                <td>Contact No.</td>
                <td>Email</td>
                <td>DOB</td>
              </tr>
            </thead>
            <tbody className="">
              {patientRow.map((patient) => {
                return (
                  <tr
                    className="patient-row border-b-2 border-sky-100"
                    key={nanoid()}
                    onClick={() => patientProfileLink(patient.id)}
                  >
                    <td>
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={checked.includes(patient.id)}
                        onChange={(e) => check(e, patient.id)}
                      />
                    </td>
                    <td>{patient.name} </td>
                    <td>{patient.age} </td>
                    <td>{patient.gender} </td>
                    <td>{patient.contact} </td>
                    <td>{patient.email} </td>
                    <td>{patient.dateBirth} </td>
                    <td>{patient.id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PatientList;
