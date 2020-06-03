import React, { useEffect } from "react";
import Chart from "chart.js";
import styles from "./DonutChart.module.css";

const DonutChart = ({ data, type }) => {
  let chartRef = React.createRef();

  const getData = (data, type) => {
    if (type === "projects") {
      let inProgress = data.filter((c) => c.status === "inProgress");
      let finished = data.filter((c) => c.status === "Finished");
      let behindSchedule = data.filter((c) => c.status === "behindSchedule");
      let toDo = data.filter((c) => c.status === "toDo");
      console.log(inProgress.length);
      let chartData = {
        chartData: [
          inProgress.length,
          finished.length,
          behindSchedule.length,
          toDo.length,
        ],
        labels: ["In progress", "Finished", "Behind schedule", "To do"],
      };
      return chartData;
    } else if (type === "tasks") {
      let inProgress = [];
      let finished = [];
      let behindSchedule = [];
      let toDo = [];
      data.forEach((project) => {
        project.tasks.forEach((task) => {
          if (task.status === "inProgress") inProgress.push(task);
          if (task.status === "Finished") finished.push(task);
          if (task.status === "behindSchedule") behindSchedule.push(task);
          if (task.status === "toDo") toDo.push(task);
        });
      });
      let chartData = {
        chartData: [
          inProgress.length,
          finished.length,
          behindSchedule.length,
          toDo.length,
        ],
        labels: ["In progress", "Finished", "Behind schedule", "To do"],
      };
      return chartData;
    } else if (type === "steps") {
      let chartData = { ...data };
      return chartData;
    }
  };

  let { chartData, labels, notFinished } = getData(data, type);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: chartData,
            backgroundColor: [
              "rgb(239, 220, 44)",
              "rgb(27, 229, 121)",
              "rgb(239, 44, 44)",
              "rgb(27, 174, 229)",
            ],
            borderColor: "transparent",
          },
        ],
        labels: labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 70,
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        animation: {
          animateScale: true,
          duration: 500,
        },
      },
    });
  }, [chartRef, chartData, labels]);

  return (
    <div className={styles.wrapper}>
      <canvas className={styles.canvas} id="myChart" ref={chartRef} />
      {/* {type === "steps" && (
        <h4>{`There's ${notFinished.length} steps left`}</h4>
      )} */}
    </div>
  );
};

export default DonutChart;

//   let output = [
//     {
//       id: 1,
//       name: "In progress",
//       value: inProgress.length,
//       array: inProgress,
//     },
//     { id: 2, name: "Finished", value: finished.length, array: finished },
//     {
//       id: 3,
//       name: "Behind schedule",
//       value: behindSchedule.length,
//       array: behindSchedule,
//     },
//     { id: 4, name: "To do", value: toDo.length, array: toDo },
//   ];
