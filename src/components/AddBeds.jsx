import React, { useState } from "react";
import { setDoc, doc } from "@firebase/firestore";

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
    <div className="container">
      <h1>Add Beds</h1>
      <input
        type="text"
        placeholder="Bed Name"
        id="Name"
        onChange={handleAddBeds}
      />
      <select
        name="occupied"
        id="Occupied"
        placeholder="Occupied?"
        onChange={handleAddBeds}
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
