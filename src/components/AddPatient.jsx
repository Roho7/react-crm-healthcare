import React, { useState } from "react";
import { Timestamp } from "@firebase/firestore";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

function AddPatient({ closeModal, data }) {
  // ADD PATIENTS TO ARRAY
  // const [patients, setPatients] = useState();
  const [addPatient, setAddPatient] = useState({
    Name: "",
    Age: "",
    DOA: "",
    DOB: "",
    Gender: "",
    Mobile: "",
    Email: "",
    Address: "",
    IdType: "",
    IdProof: "",
    LocalGuardianName: "",
    LocalGuardianIdType: "",
    LocalGuardianIdNo: "",
    LocalGuardianContact: "",
    LocalGuardianAddress: "",
    MedicalHistory: "",
    FinancialStatus: "",
    MaritalStatus: "",
    Addiction: "",
    Bed: "",
  });

  const handleAddPatients = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("id");
    const fieldValue = e.target.value;

    const newPatient = { ...addPatient };
    newPatient[fieldName] = fieldValue;

    setAddPatient(newPatient);
  };

  const patientCollection = collection(db, "patient-data");

  const onSubmitPatient = async () => {
    try {
      if (addPatient.Name === "") {
        alert("Please enter patient details");
        return;
      } else if (addPatient.Bed === "") {
        alert("Please select a bed");
        return;
      } else if (data.some((bed) => bed.Bed === addPatient.Bed)) {
        alert("This bed is occupied");
        return;
      } else {
        await addDoc(patientCollection, {
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addPatient.DOA);

  return (
    <div className="fixed bg-gray-900 bg-opacity-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="fixed container w-5/6 drop-shadow-xl">
        <h1 className="text-xl mb-4 font-bold">Add Patient Details</h1>
        <div className="grid grid-cols-4 gap-4 justify-center text-sky-900">
          <div className="form-group">
            <label htmlFor="name" name="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
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
              placeholder="Age"
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
              placeholder="Date of Admission"
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
              placeholder="Gender"
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
              placeholder="Contact"
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
              placeholder="Email"
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
              placeholder="Address"
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
              placeholder="ID Type"
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
              placeholder="ID Proof"
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
              placeholder="Local Guardian Name"
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
              placeholder="Local Guardian ID"
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
              placeholder="Local Guardian Contact"
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
              placeholder="Local Guardian ID Proof"
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
              placeholder="Local Guardian Address"
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
              placeholder="Medical History"
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
              placeholder="Financial Status"
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
              placeholder="Marital Status"
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
              placeholder="Addiction"
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
          <div className="btn-group col-span-4">
            <button type="submit" className="" onClick={onSubmitPatient}>
              Submit
            </button>
            <button
              type=""
              className="border border-red-200 text-red-500 hover:bg-red-200"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
