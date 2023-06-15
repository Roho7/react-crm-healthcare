import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart(props) {
  const db = props.data;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const patientPerMonth = db.map((patient) => patient.DOA.toDate());

  function groupDatesByMonth(dates) {
    const monthMap = new Map();

    for (const date of dates) {
      const month = date.toLocaleString("default", { month: "long" });
      if (monthMap.has(month)) {
        monthMap.get(month).push(date);
      } else {
        monthMap.set(month, [date]);
      }
    }

    return Array.from(monthMap.values());
  }

  const monthlyArray = groupDatesByMonth(
    patientPerMonth.sort((a, b) => a.getMonth() - b.getMonth())
  );

  console.log(monthlyArray, "monthly");

  const data = {
    labels,
    datasets: [
      {
        label: "No. of patients",
        data: monthlyArray.map((month) => month.length),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        //   data: labels.map(() => datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} className="container" />;
}
