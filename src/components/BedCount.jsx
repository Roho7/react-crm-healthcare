import React from "react";

function BedCount(props) {
  const beds = props.data;
  const patient = props.patient.data;
  console.log(patient);

  return (
    <div className="container col-span-3">
      <h1 className="text-3xl  font-bold mb-4">Vacancies</h1>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-sky-700">First Floor</h2>
        <div className=" flex gap-4 flex-wrap">
          {beds.map((bed) => {
            console.log(patient.some((item) => item.Bed === bed.Name));
            return (
              <div
                key={bed.id}
                className={
                  patient.some((item) => item.Bed === bed.Name)
                    ? "bed occupied"
                    : "bed"
                }
              >
                {bed.Name}
              </div>
            );
          })}
          {/* {beds
            .filter((floor) => {
              return floor.floor === 1;
            })
            .map((bed) => {
              return (
                <div>
                  <div
                    key={bed.key}
                    className={
                      patients.some((item) => item.bed === bed.key)
                        ? "bed occupied"
                        : "bed"
                    }
                    id="1"
                  >
                    {bed.key}
                  </div>
                </div>
              );
            })} */}
        </div>
      </div>
    </div>
  );
}

export default BedCount;
