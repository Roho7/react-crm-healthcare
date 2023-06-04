import React from "react";
import bills from "../data/bills.json";
import patient from "../data/patient.json";

function PatientBill({ id }) {
  function calcTotal(data) {
    let total = 0;

    for (let i in data) {
      if (i !== "id") {
        total += parseFloat(data[i]);
      }
    }
    return total;
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-sky-900 mb-2">Expenses</h1>
      <div className="flex w-full container">
        <table className="w-full">
          <tbody>
            {bills
              .filter((correctBill) => {
                return correctBill.id === id;
              })
              .map((patient) => {
                const Total = calcTotal(patient);
                return (
                  <>
                    {Object.keys(patient).map((entry) => (
                      <tr key={entry}>
                        <td>{entry}</td>
                        <td>{patient[entry]}</td>
                      </tr>
                    ))}
                    <tr className="details-row">
                      <td className="row-head">Total</td>
                      <td>{Total}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientBill;
