import React from "react";

const handleBedHover = (e) => {
  const bedHover = document.querySelector(".bed-hover");
  bedHover.style.display = "block";
  console.log("bedhover");
};

function BedCount(props) {
  const beds = props.data;
  const patient = props.patient.data;

  return (
    <div className="container col-span-3">
      <h1 className="text-3xl  font-bold mb-4">Vacancies</h1>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-sky-700">First Floor</h2>
        <div className=" flex gap-4 flex-wrap">
          {beds.map((bed) => {
            // console.log("name", patient.data.Name);
            return (
              <div key={bed.id} className="relative">
                <div className="bed-hover">
                  {patient
                    .filter((item) => item.Bed === bed.Name)
                    .map((e) => e.Name)}
                </div>
                <div
                  onClick={handleBedHover}
                  className={
                    patient.some((item) => item.Bed === bed.Name)
                      ? "bed occupied"
                      : "bed"
                  }
                >
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
