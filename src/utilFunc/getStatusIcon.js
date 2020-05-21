import FinishedIcon from "../assets/icons/svg/Finished.svg";
import InProgressIcon from "../assets/icons/svg/InProgress.svg";
import BehindScheduleIcon from "../assets/icons/svg/BehindSchedule.svg";
import ToDoIcon from "../assets/icons/svg/toDo.svg";
import NoneIcon from "../assets/icons/svg/None.svg";

const getStatusIcon = (status) => {
  if (status === "inProgress") return InProgressIcon;
  if (status === "Finished") return FinishedIcon;
  if (status === "behindSchedule") return BehindScheduleIcon;
  if (status === "toDo") return ToDoIcon;
  if (status === "none" || status === "None") return NoneIcon;
  if (!status) {
    return [
      { icon: InProgressIcon, status: "inProgress" },
      { icon: FinishedIcon, status: "Finished" },
      { icon: BehindScheduleIcon, status: "behindSchedule" },
      { icon: ToDoIcon, status: "toDo" },
      { icon: NoneIcon, status: "none" },
    ];
  }
};

export default getStatusIcon;
