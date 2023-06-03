import React, { useState } from "react";
import patient from "../data/patient.json";
import { nanoid } from "nanoid";

function AddPatient({ closeModal, onSubmit }) {
  // ADD PATIENTS TO ARRAY
  const [patients, setPatients] = useState(patient);
  const [addPatient, setAddPatient] = useState({
    id: "",
    name: "",
    age: "",
    dateAdm: "",
    dateBirth: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    idType: "",
    idProof: "",
    localGuardian: "",
    localGuardianId: "",
    localGuardianContact: "",
    localGuardianIdProof: "",
    localGuardianAddress: "",
    medicalHistory: "",
    financialStatus: "",
    maritalStatus: "",
    addiction: "",
    bed: "",
  });

  const handleAddPatients = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("id");
    const fieldValue = e.target.value;

    const newPatient = { ...addPatient };
    newPatient[fieldName] = fieldValue;

    setAddPatient(newPatient);
  };

  const handleSubmitPatients = (e) => {
    e.preventDefault();

    console.log("submitted");

    const newPatient = {
      id: addPatient.id,
      name: addPatient.name,
      age: addPatient.age,
      dateAdm: addPatient.dateAdm,
      dateBirth: addPatient.dateBirth,
      gender: addPatient.gender,
      contact: addPatient.contact,
      email: addPatient.email,
      address: addPatient.address,
      idType: addPatient.idType,
      idProof: addPatient.idProof,
      localGuardian: addPatient.localGuardian,
      localGuardianId: addPatient.localGuardianId,
      localGuardianContact: addPatient.localGuardianContact,
      localGuardianIdProof: addPatient.localGuardianIdProof,
      localGuardianAddress: addPatient.localGuardianAddress,
      medicalHistory: addPatient.medicalHistory,
      financialStatus: addPatient.financialStatus,
      maritalStatus: addPatient.maritalStatus,
      addiction: addPatient.addiction,
      bed: addPatient.bed,
    };

    const newPatients = [...patients, newPatient];
    setPatients(newPatients);
    onSubmit(newPatient);
  };

  return (
    <div className="fixed bg-gray-900 bg-opacity-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="fixed bg-slate-50 p-4 rounded-xl drop-shadow-xl">
        <form
          action=""
          className="grid grid-cols-4 gap-4 justify-center text-sky-900"
          onSubmit={handleSubmitPatients}
        >
          <div className="form-group">
            <label htmlFor="id" name="id">
              ID
            </label>
            <input
              type="text"
              placeholder="ID"
              id="id"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name" name="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" name="age">
              Age
            </label>
            <input
              type="text"
              placeholder="Age"
              id="age"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateAdm" name="dateAdm">
              Date of Admission
            </label>
            <input
              type="text"
              placeholder="Date of Admission"
              id="dateAdm"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateBirth" name="dateBirth">
              Date of Birth
            </label>
            <input
              type="text"
              placeholder="Date of Birth"
              id="dateBirth"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender" name="gender">
              Gender
            </label>
            <input
              type="text"
              placeholder="Gender"
              id="gender"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" name="contact">
              Contact
            </label>
            <input
              type="text"
              placeholder="Contact"
              id="contact"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              id="email"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" name="address">
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              id="address"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="idType" name="idType">
              ID Type
            </label>
            <input
              type="text"
              placeholder="ID Type"
              id="idType"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="idProof" name="idProof">
              ID Proof
            </label>
            <input
              type="text"
              placeholder="ID Proof"
              id="idProof"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardian" name="localGuardian">
              Local Guardian Name
            </label>
            <input
              type="text"
              placeholder="Local Guardian Name"
              id="localGuardian"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianId" name="localGuardianId">
              Local Guardian ID
            </label>
            <input
              type="text"
              placeholder="Local Guardian ID"
              id="localGuardianId"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianContact" name="localGuardianContact">
              Local Guardian Contact
            </label>
            <input
              type="text"
              placeholder="Local Guardian Contact"
              id="localGuardianContact"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianIdProof" name="localGuardianIdProof">
              Local Guardian ID Proof
            </label>
            <input
              type="text"
              placeholder="Local Guardian ID Proof"
              id="localGuardianIdProof"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianAddress" name="localGuardianAddress">
              Local Guardian Address
            </label>
            <input
              type="text"
              placeholder="Local Guardian Address"
              id="localGuardianAddress"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="medicalHistory" name="medicalHistory">
              Medical History
            </label>
            <input
              type="text"
              placeholder="Medical History"
              id="medicalHistory"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="financialStatus" name="financialStatus">
              Financial Status
            </label>
            <input
              type="text"
              placeholder="Financial Status"
              id="financialStatus"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="maritalStatus" name="maritalStatus">
              Marital Status
            </label>
            <input
              type="text"
              placeholder="Marital Status"
              id="maritalStatus"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="addiction" name="addiction">
              Addiction
            </label>
            <input
              type="text"
              placeholder="Addiction"
              id="addiction"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bed" name="bed">
              Bed
            </label>
            <input
              type="text"
              placeholder="Bed"
              id="bed"
              onChange={handleAddPatients}
            />
          </div>

          <button type="submit" className="col-span-5">
            Submit
          </button>
          <button type="" className="col-span-5" onClick={closeModal}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPatient;
