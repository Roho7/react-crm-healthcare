import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PatientBill from "../components/PatientBill";
import CurrentUser from "../components/CurrentUser";
import { deleteDoc, doc } from "@firebase/firestore";
import { FiEdit, FiTrash } from "react-icons/fi";
import { db } from "../config/firebase";
import EditPatient from "../components/EditPatient";

function PatientProfile(props) {
  const data = props.data;

  const { id } = useParams();

  // *Delete Patient Profile
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const profile = doc(db, "patient-data", id);
    console.log("deted");
    try {
      await deleteDoc(profile);
    } catch (err) {
      console.log(err);
    }
    navigate("/reports");
  };

  // Set Modal Component
  const [modalOpen, setModalOpen] = useState(false);
  function handleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      {modalOpen && (
        <EditPatient closeModal={() => setModalOpen(false)} data={data} />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h1 className="text-5xl text-sky-900 mb-8">Patient Details</h1>
          <CurrentUser />
        </div>

        {data
          .filter((patient) => patient.id === id)
          .map((patient) => {
            return (
              <div key={patient.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-xl text-sky-50 bg-sky-600 rounded-2xl py-2 px-4 max-w-max">
                    Bed Number: {patient.Bed}
                  </span>
                  <div className="flex gap-2 w-1/2">
                    <button
                      className=""
                      onClick={() => handleModal(patient.id)}
                    >
                      Edit Details <FiEdit />
                    </button>
                    <button
                      className="text-red-500 hover:bg-red-200 border-red-300"
                      onClick={() => handleDelete(patient.id)}
                    >
                      Delete Profile <FiTrash />
                    </button>
                  </div>
                </div>
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
              </div>
            );
          })}

        <PatientBill id={id} />
      </div>
    </>
  );
}

export default PatientProfile;
