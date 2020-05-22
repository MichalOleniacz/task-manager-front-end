import React from "react";

import styles from "./StatsTable.module.css";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import RecentChanges from "../RecentChanges/RecentChanges";
import Priorities from "../Priorities/Priorities";
import StatsPieChart from "../StatsPieChart/StatsPieChart";
import Reminders from "../Reminders/Reminders";
import ListByStatus from "../ListByStatus/ListByStatus";

const StatsTable = ({ userData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.leftTopWrapper}>
            <div className={styles.cellWrapper}>
              <ActivityFeed activity={userData.activity} />
            </div>
            <div className={styles.cellWrapper}>
              <RecentChanges
                projects={userData.projects}
                reminders={userData.reminders}
              />
            </div>
          </div>
          <div className={styles.latestTasksWrapper}>
            <Priorities projects={userData.projects} />
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.chartWrapper}>
            <StatsPieChart projects={userData.projects} />
          </div>
          <div className={styles.remindersWrapper}>
            <Reminders reminders={userData.reminders} />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus status="inProgress" projects={userData.projects} />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus
              status="behindSchedule"
              projects={userData.projects}
            />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus status="toDo" projects={userData.projects} />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus status="Finished" projects={userData.projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
