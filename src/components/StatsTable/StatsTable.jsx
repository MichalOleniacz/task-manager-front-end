import React from "react";

import styles from "./StatsTable.module.css";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import RecentChanges from "../RecentChanges/RecentChanges";
import LatestTasks from "../LatestTasks/LatestTasks";
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
              <RecentChanges />
            </div>
          </div>
          <div className={styles.latestTasksWrapper}>
            <LatestTasks />
          </div>
        </div>
        <div className={styles.middleWrapper}>
          <div className={styles.chartWrapper}>
            <StatsPieChart />
          </div>
          <div className={styles.remindersWrapper}>
            <Reminders />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus />
          </div>
          <div className={styles.listByStatusWrapper}>
            <ListByStatus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
