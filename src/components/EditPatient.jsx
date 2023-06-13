import React, { useState } from "react";
import { Timestamp } from "@firebase/firestore";
import { collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

function EditPatient({ closeModal, onSubmit, data }) {
  // ADD PATIENTS TO ARRAY
  const [addPatient, setAddPatient] = useState({
    Name: data[0].Name,
    Age: data[0].Age,
    DOA: data[0].DOA.toDate(),
    DOB: data[0].DOB.toDate(),
    Gender: data[0].Gender,
    Mobile: data[0].Mobile,
    Email: data[0].Email,
    Address: data[0].Address,
    IdType: data[0].IdType,
    IdProof: data[0].IdProof,
    LocalGuardianName: data[0].LocalGuardianName,
    LocalGuardianIdType: data[0].LocalGuardianIdType,
    LocalGuardianIdNo: data[0].LocalGuardianIdNo,
    LocalGuardianContact: data[0].LocalGuardianContact,
    LocalGuardianAddress: data[0].LocalGuardianAddress,
    MedicalHistory: data[0].MedicalHistory,
    FinancialStatus: data[0].FinancialStatus,
    MaritalStatus: data[0].MaritalStatus,
    Addiction: data[0].Addiction,
    Bed: data[0].Bed,
  });

  const handleAddPatients = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("id");
    const fieldValue = e.target.value;

    const newPatient = { ...addPatient };
    newPatient[fieldName] = fieldValue;

    setAddPatient(newPatient);
  };

  const onSubmitPatient = async (id) => {
    const patientCollection = doc(db, "patient-data", id);
    try {
      await updateDoc(patientCollection, {
        Name: addPatient.Name,
        Age: Number(addPatient.Age),
        DOA: Timestamp.fromDate(new Date(addPatient.DOA)),
        DOB: Timestamp.fromDate(new Date(addPatient.DOB)),
        Gender: addPatient.Gender,
        Mobile: addPatient.Mobile,
        Email: addPatient.Email,
        Address: addPatient.Address,
        IdType: addPatient.IdType,
        IdProof: addPatient.IdProof,
        LocalGuardianName: addPatient.LocalGuardianName,
        LocalGuardianIdType: addPatient.LocalGuardianIdType,
        LocalGuardianIdNo: addPatient.LocalGuardianIdNo,
        LocalGuardianContact: addPatient.LocalGuardianContact,
        LocalGuardianAddress: addPatient.LocalGuardianAddress,
        MedicalHistory: addPatient.MedicalHistory,
        FinancialStatus: addPatient.FinancialStatus,
        MaritalStatus: addPatient.MaritalStatus,
        Addiction: addPatient.Addiction,
        Bed: addPatient.Bed,
      });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed bg-gray-900 bg-opacity-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="fixed bg-slate-50 p-4 rounded-xl drop-shadow-xl">
        <h1 className="text-xl mb-4 font-bold">Add Patient Details</h1>
        <div className="grid grid-cols-4 gap-4 justify-center text-sky-900">
          <div className="form-group">
            <label htmlFor="name" name="name">
              Name
            </label>
            <input
              type="text"
              placeholder={data[0].Name}
              id="Name"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" name="age">
              Age
            </label>
            <input
              type="number"
              placeholder={data[0].Age}
              id="Age"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateAdm" name="dateAdm">
              Date of Admission
            </label>
            <input
              type="date"
              placeholder={data[0].DOA}
              id="DOA"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateBirth" name="dateBirth">
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Date of Birth"
              id="DOB"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender" name="gender">
              Gender
            </label>
            <input
              type="text"
              placeholder={data[0].Gender}
              id="Gender"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact" name="contact">
              Contact
            </label>
            <input
              type="text"
              placeholder={data[0].Mobile}
              id="Mobile"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" name="email">
              Email
            </label>
            <input
              type="text"
              placeholder={data[0].Email}
              id="Email"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" name="address">
              Address
            </label>
            <input
              type="text"
              placeholder={data[0].Address}
              id="Address"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="idType" name="idType">
              ID Type
            </label>
            <input
              type="text"
              placeholder={data[0].IdType}
              id="IdType"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="idProof" name="idProof">
              ID Proof
            </label>
            <input
              type="text"
              placeholder={data[0].IdProof}
              id="IdNumber"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardian" name="localGuardian">
              Local Guardian Name
            </label>
            <input
              type="text"
              placeholder={data[0].LocalGuardianName}
              id="LocalGuardianName"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianId" name="localGuardianId">
              Local Guardian ID
            </label>
            <input
              type="text"
              placeholder={data[0].LocalGuardianIdNo}
              id="LocalGuardianIdNo"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianContact" name="localGuardianContact">
              Local Guardian Contact
            </label>
            <input
              type="text"
              placeholder={data[0].LocalGuardianContact}
              id="LocalGuardianContact"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianIdProof" name="localGuardianIdProof">
              Local Guardian ID Proof
            </label>
            <input
              type="text"
              placeholder={data[0].LocalGuardianIdType}
              id="LocalGuardianIdType"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="localGuardianAddress" name="localGuardianAddress">
              Local Guardian Address
            </label>
            <input
              type="text"
              placeholder={data[0].LocalGuardianAddress}
              id="LocalGuardianAddress"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="medicalHistory" name="medicalHistory">
              Medical History
            </label>
            <input
              type="text"
              placeholder={data[0].MedicalHistory}
              id="MedicalHistory"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="financialStatus" name="financialStatus">
              Financial Status
            </label>
            <input
              type="text"
              placeholder={data[0].FinancialStatus}
              id="FinancialStatus"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="maritalStatus" name="maritalStatus">
              Marital Status
            </label>
            <input
              type="text"
              placeholder={data[0].MaritalStatus}
              id="MaritalStatus"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="addiction" name="addiction">
              Addiction
            </label>
            <input
              type="text"
              placeholder={data[0].Addiction}
              id="Addiction"
              onChange={handleAddPatients}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bed" name="bed">
              Bed
            </label>
            <select
              type="dropdown"
              placeholder="Bed"
              id="Bed"
              onChange={handleAddPatients}
            >
              <optgroup label="1st Floor">
                <option value="none" selected hidden disabled>
                  {data[0].Bed}
                </option>
                <option value="1A">1A</option>
                <option value="1B">1B</option>
                <option value="1C">1C</option>
                <option value="1D">1D</option>
                <option value="1E">1E</option>
                <option value="1F">1F</option>
                <option value="1G">1G</option>
                <option value="1H">1H</option>
                <option value="1I">1I</option>
                <option value="1J">1J</option>
              </optgroup>

              <optgroup label="2nd Floor">
                <option value="2A">2A</option>
                <option value="2B">2B</option>
                <option value="2C">2C</option>
                <option value="2D">2D</option>
                <option value="2E">2E</option>
                <option value="2F">2F</option>
                <option value="2G">2G</option>
                <option value="2H">2H</option>
                <option value="2I">2I</option>
                <option value="2J">2J</option>
              </optgroup>

              <optgroup label="3rd Floor">
                <option value="3A">3A</option>
                <option value="3B">3B</option>
                <option value="3C">3C</option>
                <option value="3D">3D</option>
                <option value="3E">3E</option>
                <option value="3F">3F</option>
              </optgroup>
            </select>
          </div>

          <button
            type="submit"
            className="col-span-5"
            onClick={() => onSubmitPatient(data[0].id)}
          >
            Submit
          </button>
          <button type="" className="col-span-5" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPatient;
