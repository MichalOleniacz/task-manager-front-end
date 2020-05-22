import React from "react";
import { Link } from "react-router-dom";
import getStatusIcon from "../../utilFunc/getStatusIcon";
import GarbageIcon from "../../assets/icons/svg/garbage.svg";
import HeartFullIcon from "../../assets/icons/svg/heartFull.svg";
import styles from "./BasicList.module.css";

const BasicList = ({ data, reminders, type, allProjects }) => {
  const getData = (data, reminders, type) => {
    if (type === "recent") {
      let sorted = data
        .sort((a, b) => a.daysSinceUpdate - b.daysSinceUpdate)
        .filter((e) => e.daysSinceUpdate < 2);
      return sorted;
    } else if (type === "projects") return data;
    else if (type === "tasks") {
      let tasks = [];
      data.forEach((project) => {
        if (project.tasks.length !== 0) {
          project.tasks.forEach((task) => {
            tasks.push(task);
          });
        }
      });
      return tasks;
    } else if (type === "reminders") return reminders;
    else if (type === "sortedTasks") return data;
    else if (type === "priorityProjects")
      return data.filter((c) => c.isPrioritized === true);
    else if (type === "priorityTasks") {
      let tasks = [];
      data.forEach((project) => {
        project.tasks.forEach((task) => {
          if (task.isPrioritized === true) tasks.push(task);
        });
      });
      return tasks;
    } else return data;
  };

  const getParentName = (data, task) => {
    let name = data.filter((c) => c.id === task);
    let output = name[0].title;
    return output;
  };

  const getSortedTasksParent = (task) => {
    let name = allProjects.filter((c) => c.id === task);
    let output = name[0].title;
    return output;
  };

  const getContent = (data) => {
    if (data.length > 0) {
      return (
        <ul className={styles.list}>
          {listData.map((el) => {
            return (
              <div
                key={el.id}
                to={`/projects/${el.id}`}
                className={styles.link}>
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
                  <div className={styles.iconWrapper}>
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
                    {type === "sortedTasks" || type === "priorityTasks" ? (
                      <h5>{getSortedTasksParent(el.idParent)}</h5>
                    ) : null}
                    {type === "priorityProjects" || type === "priorityTasks" ? (
                      <img
                        src={HeartFullIcon}
                        alt="heartFull"
                        className={styles.icon}
                      />
                    ) : null}
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      );
    } else {
      return <h4>Empty</h4>;
    }
  };

  let listData = getData(data, reminders, type);

  return <div className={styles.wrapper}>{getContent(listData)}</div>;
};

export default BasicList;
