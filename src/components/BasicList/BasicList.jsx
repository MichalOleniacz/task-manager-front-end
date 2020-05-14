import React from "react";
import { Link } from "react-router-dom";
import getStatusIcon from "../../utilFunc/getStatusIcon";
import GarbageIcon from "../../assets/icons/svg/garbage.svg";
import styles from "./BasicList.module.css";

const BasicList = ({ data, reminders, type }) => {
  const getData = (data, reminders, type) => {
    if (type === "recent") {
      let sorted = data
        .sort((a, b) => a.daysSinceUpdate - b.daysSinceUpdate)
        .filter((e) => e.daysSinceUpdate < 7);
      return sorted;
    } else if (type === "tasks") {
      let tasks = [];
      data.forEach((project) => {
        if (project.tasks.length !== 0) {
          project.tasks.forEach((task) => {
            tasks.push(task);
          });
        }
      });
      return tasks;
    } else if (type === "reminders") {
      console.log(reminders);
      return reminders;
    } else return data;
  };

  const getParentName = (data, task) => {
    let name = data.filter((c) => c.id === task);
    let output = name[0].title;
    return output;
  };

  let listData = getData(data, reminders, type);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {listData.map((el) => {
          return (
            <div key={el.id} to={`/projects/${el.id}`} className={styles.link}>
              <li className={styles.cell}>
                <div
                  className={
                    type === "reminders"
                      ? styles.reminderWrapper
                      : styles.titleWrapper
                  }>
                  {el.status ? (
                    <img
                      src={getStatusIcon(el.status)}
                      alt="status"
                      className={styles.icon}
                    />
                  ) : null}
                  {type === "reminders" ? (
                    <h4>{`${el.title}`}</h4>
                  ) : (
                    <Link to={`/projects/${el.id}`}>
                      <h4>{`${el.title}`}</h4>
                    </Link>
                  )}
                  {/* <h4>{el.title}</h4> */}
                </div>
                {type === "reminders" ? (
                  <img
                    src={GarbageIcon}
                    alt="GarbageIcon"
                    className={styles.icon}
                  />
                ) : null}
                {type === "tasks" ? (
                  <h5>{getParentName(data, el.idParent)}</h5>
                ) : null}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default BasicList;
