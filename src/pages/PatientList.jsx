import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPatient from "../components/AddPatient";
import { FiPlusCircle } from "react-icons/fi";
import CurrentUser from "../components/CurrentUser";

function PatientList(props) {
  const db = props.data; // ! Reference to Database prop
  console.log(db);
  //* Set Checkbox component
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
                <td>DOA</td>
                <td>DOB</td>
              </tr>
            </thead>
            <tbody className="">
              {db.map((patient) => {
                return (
                  <tr
                    className="patient-row border-b-2 border-sky-100"
                    key={patient.id}
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
                    <td>{patient.Name} </td>
                    <td>{patient.Age} </td>
                    <td>{patient.Gender} </td>
                    <td>{patient.Mobile} </td>
                    <td>{patient.Email} </td>
                    <td>{patient.DOA.toDate().toDateString()}</td>
                    <td>{patient.DOB.toDate().toDateString()} </td>
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
