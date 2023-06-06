import React from "react";
import patients from "../data/patient.json";
import beds from "../data/beds.json";

function BedCount() {
  return (
    <div className="container col-span-3">
      <h1 className="text-3xl  font-bold mb-4">Vacancies</h1>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-sky-700">First Floor</h2>
        <div className=" flex gap-4 flex-wrap">
          {beds
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
            })}
        </div>
        <h2 className="font-bold ">Second Floor</h2>
        <div className="flex gap-4 flex-wrap">
          {beds
            .filter((floor) => {
              return floor.floor === 2;
            })
            .map((bed) => {
              return (
                <div>
                  <div
                    className={
                      patients.some((item) => item.bed === bed.key)
                        ? "bed occupied"
                        : "bed"
                    }
                  >
                    {bed.key}
                  </div>
                </div>
              );
            })}
        </div>
        <h1 className="font-bold text-sky-700">Third Floor</h1>
        <div className=" flex gap-4 flex-wrap">
          {beds
            .filter((floor) => {
              return floor.floor === 3;
            })
            .map((bed) => {
              return (
                <div>
                  <div
                    className={
                      patients.some((item) => item.bed === bed.key)
                        ? "bed occupied"
                        : "bed"
                    }
                  >
                    {bed.key}
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
