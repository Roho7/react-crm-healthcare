import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import PatientProfile from "./pages/PatientProfile";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { db } from "./config/firebase";
import { getDocs, collection } from "@firebase/firestore";
import ReactLoading from "react-loading";
import PatientBills from "./pages/PatientBills";
import Analytics from "./pages/Analytics";

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
      {loading && (
        <div className="absolute w-screen h-screen text-9xl z-10 flex justify-center items-center">
          <ReactLoading type="spin" color="rgb(56 189 248)" />
        </div>
      )}
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
            <Route
              path="/reports/patients/bills"
              element={<PatientBills data={patientData} />}
            />
            <Route
              path="/analytics"
              element={<Analytics data={patientData} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
