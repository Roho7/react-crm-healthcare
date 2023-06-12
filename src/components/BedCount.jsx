import React from "react";

function BedCount(props) {
  const beds = props.data;
  const patient = props.patient.data;

  return (
    <div className="container col-span-3">
      <h1 className="text-3xl  font-bold mb-4">Vacancies</h1>
      <div className="flex flex-col gap-2">
        {/* <h2 className="font-bold text-sky-700 ">First Floor</h2> */}
        <div className=" flex gap-4 flex-wrap">
          {beds.map((bed) => {
            return (
              <div key={bed.id}>
                <div
                  className={
                    patient.some((item) => item.Bed === bed.Name)
                      ? "bed occupied group"
                      : "bed"
                  }
                >
                  <div className="bed-hover group-hover:scale-100">
                    {patient
                      .filter((item) => item.Bed === bed.Name)
                      .map((e) => e.Name)}
                  </div>
                  {bed.Name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BedCount;
