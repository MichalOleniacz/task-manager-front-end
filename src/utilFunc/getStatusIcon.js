import FinishedIcon from "../assets/icons/svg/Finished.svg";
import InProgressIcon from "../assets/icons/svg/InProgress.svg";
import BehindScheduleIcon from "../assets/icons/svg/BehindSchedule.svg";

const getStatusIcon = (status) => {
  if (status === "inProgress") {
    // In progress
    return InProgressIcon;
  }
  if (status === "Finished") {
    // Finished
    return FinishedIcon;
  }
  if (status === "behindSchedule") {
    // Behind Schedule
    return BehindScheduleIcon;
  }
};

export default getStatusIcon;
