import React, { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";
import { FaBed } from "react-icons/fa";
function AddBeds(props) {
  // * Create an empty State object
  const [addBeds, setAddBeds] = useState({
    Name: "",
    Occupied: false,
    Floor: "",
  });

  // * Handle the submit event

  const handleAddBeds = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("id");
    const fieldValue = e.target.value;

    const newBed = { ...addBeds };
    newBed[fieldName] = fieldValue;

    setAddBeds(newBed);
  };

  const handleSubmitBeds = async (e) => {
    try {
      document.getElementById("Name").value = "";
      await setDoc(doc(props.data, addBeds.Name), {
        Name: addBeds.Name,
        Occupied: addBeds.Occupied,
        Floor: addBeds.Name.charAt(0),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container flex flex-col gap-2 col-span-2">
      <h1 className="mb-4 font-bold text-3xl flex items-center gap-4">
        Add Beds <FaBed />
      </h1>
      <label htmlFor="Name">Bed Name</label>
      <input
        type="text"
        placeholder="Bed Name"
        id="Name"
        onChange={handleAddBeds}
      />
      <label htmlFor="Occupied">Occupied</label>
      <select
        name="occupied"
        id="Occupied"
        placeholder="Occupied?"
        onChange={handleAddBeds}
        className="text-sky-700"
      >
        <option value="true">Yes</option>
        <option value="false" selected>
          No
        </option>
      </select>
      <button onClick={handleSubmitBeds}>Save</button>
    </div>
  );
}

export default AddBeds;
