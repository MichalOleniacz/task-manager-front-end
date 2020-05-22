import React, { useEffect } from "react";
import styles from "./ActivityChart.module.css";
import Chart from "chart.js";

const ActivityChart = ({ activity }) => {
  let chartRef = React.createRef();

  const getData = (activity) => {
    let output = [];
    activity.map((el) => output.push(el.changes));
    let sort = [...output];
    sort.sort((a, b) => b - a);
    return { values: output, sort: sort[0] };
  };

  // #1D976C dark
  // #93F9B9

  //   const getLabels = (activity) => {
  //     let output = [];
  //     let current;
  //     activity.map((el) => {
  //       current = Date.now() - el.date;
  //       output.push(current);
  //     });
  //     return output;
  //   };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const setGradient = (ctx) => {
      const gradient = ctx.createLinearGradient(0, 350, 0, 0);

      gradient.addColorStop(0, "rgba(147, 249, 184, 0)");
      gradient.addColorStop(0.1, "rgba(147, 249, 184, 0.05)");
      gradient.addColorStop(0.5, "rgba(27, 229, 121,0.8)");
      gradient.addColorStop(0.8, "rgba(27, 229, 121,1)");
      return gradient;
    };

    let { values, sort } = getData(activity);
    let labels = [
      "14d",
      //   "13d",
      //   "12d",
      //   "11d",
      //   "10d",
      //   "9d",
      //   "8d",
      "",
      "",
      "",
      "",
      "",
      "",
      "7d",
      "",
      "",
      "",

      "",
      "",
      //   "6d",
      //   "5d",
      //   "4d",
      //   "3d",
      //   "2d",
      "1d",
    ];

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Changes",
            data: values,
            backgroundColor: setGradient(ctx),
            pointBorderColor: "transparent",
            borderColor: "transparent",
            pointHoverBackgroundColor: "rgba(27, 229, 121,1)",
            lineTension: 0.5,
          },
        ],
      },
      options: {
        showLines: true,
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,

        layout: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              ticks: {
                fontFamily: "Montserrat",
                fontColor: "#707070",
                max: 60,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              ticks: {
                stepSize: 1,
                min: null,
                max: sort < 10 ? 10 : sort,
                fontColor: "#707070",
                fontFamily: "Montserrat",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  }, [activity, chartRef]);

  return (
    <div className={styles.wrapper}>
      <canvas className={styles.canvas} id="myChart" ref={chartRef} />
    </div>
  );
};

export default ActivityChart;
