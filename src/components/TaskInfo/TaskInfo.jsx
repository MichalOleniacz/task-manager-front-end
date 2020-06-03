import React from "react";

import BasicList from "../../utils/BasicList/BasicList";
import DonutChart from "../charts/DonutChart/DonutChart";

import data from "../../fakaData/userData";

import styles from "./TaskInfo.module.css";

const TaskInfo = ({ currentTask }) => {
  console.log(currentTask);
  const getData = (task) => {
    let inProgress = task.steps.filter((c) => c.status === "inProgress");
    let finished = task.steps.filter((c) => c.status === "Finished");
    let behindSchedule = task.steps.filter(
      (c) => c.status === "behindSchedule"
    );
    let toDo = task.steps.filter((c) => c.status === "toDo");
    let notFinished = task.steps.filter((c) => c.status !== "Finished");
    let chartData = {
      notFinished: notFinished,
      chartData: [
        inProgress.length,
        finished.length,
        behindSchedule.length,
        toDo.length,
      ],
      labels: ["In progress", "Finished", "Behind schedule", "To do"],
    };
    return chartData;
  };

  let { notFinished } = getData(currentTask);
  const getChartMessage = (notFinished) => {
    let notFinishedLength = notFinished.length;
    if (notFinishedLength === 0) return `You're all done!`;
    if (notFinishedLength === 1) return `There's only one step left!`;
    if (notFinishedLength > 1)
      return `There are ${notFinishedLength} steps left!`;
  };

  const getPercentage = (task, notFinished) => {
    let finished = task.steps.length - notFinished.length;
    let percentage = Math.ceil((finished * 100) / task.steps.length);
    if (percentage !== task.completion) return percentage;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.listWrapper}>
        <h3>Steps:</h3>
        <div className={styles.innerListWrapper}>
          <BasicList data={currentTask} type="steps" />
        </div>
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.innerChartWrapper}>
          <DonutChart data={getData(currentTask)} type="steps" />
        </div>
        <div className={styles.fixedPercentage}>
          <h4 className={styles.percentage}>{`${getPercentage(
            currentTask,
            notFinished
          )}%`}</h4>

          <h5>Completed</h5>
        </div>
        <h4 className={styles.message}>{getChartMessage(notFinished)}</h4>
      </div>
    </div>
  );
};

export default TaskInfo;
