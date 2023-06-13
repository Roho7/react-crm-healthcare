import React from "react";

const labels = [
  {
    id: "Patient ID",
    rent: "Rent",
    medicine: "Medicine Bill",
    injection: "Injection",
    diaper: "Diaper Bill",
    mollisheet: "Mollisheet Bill",
    cotton: "Cotton Bill",
    handCare: "Hand Care",
    doctorFees: "Doctor Fees",
    physio: "Physiotherapy",
    bloodTest: "Blood Test",
    dressing: "Dressing",
    ambulance: "Ambulance Charges",
    oxygen: "Oxygen",
    bonus: "Bonus",
    others: "Others",
  },
];

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
          <thead>
            <tr className="details-row text-left text-sky-700">
              <th>Bills</th>
              <th>Amount</th>
            </tr>
          </thead>
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
                      <tr key={entry} className="details-row">
                        <td>
                          {labels.map((tag) => {
                            return tag[entry];
                          })}
                        </td>
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
