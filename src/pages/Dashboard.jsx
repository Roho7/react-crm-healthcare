import React, { useState, useEffect } from "react";
import DayCount from "../components/DayCount";
import Calendar from "../components/Calendar";
import BedCount from "../components/BedCount";
import CurrentUser from "../components/CurrentUser";
import AddBeds from "../components/AddBeds";
import { db } from "../config/firebase";
import { getDocs, collection } from "@firebase/firestore";

function Dashboard(data) {
  // !Beds Database Connection
  // * Set the Beds data in an array

  const [beds, setBeds] = useState([]);

  // *Ged the Beds Data
  const bedsCollection = collection(db, "bed-data");

  useEffect(() => {
    const getBedData = async () => {
      try {
        const data = await getDocs(bedsCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBeds(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getBedData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="text-5xl mb-8">Dashboard</h1>
        {/* <CurrentUser /> */}
      </div>

      <div className="grid grid-cols-5 gap-2">
        <DayCount patient={data} bed={beds} />
        <Calendar patient={data} />
        <BedCount data={beds} patient={data} />
        <AddBeds data={bedsCollection} />
      </div>
    </div>
  );
}

export default Dashboard;
