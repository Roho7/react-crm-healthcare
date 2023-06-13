import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import PatientProfile from "./pages/PatientProfile";
import { Routes, Route } from "react-router-dom";
import { db } from "./config/firebase";
import { getDocs, collection } from "@firebase/firestore";

function Home() {
  const [loading, setLoading] = useState(false);
  // ! Database Connection Patients -----
  const [patientData, setPatientData] = useState([]);

  const patientCollection = collection(db, "patient-data");

  useEffect(() => {
    const getPatientData = async () => {
      try {
        setLoading(true);
        const data = await getDocs(patientCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPatientData(filteredData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getPatientData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-screen h-screen bg-black absolute text-white">
          Loading
        </div>
      ) : (
        <div className="flex">
          <Navbar />
          <div className="p-4 bg-sky-50 main w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard data={patientData} />} />
              <Route
                path="/reports"
                element={<PatientList data={patientData} />}
              />
              <Route
                path="/reports/patients/:id"
                element={<PatientProfile data={patientData} />}
              />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
