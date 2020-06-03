import data from "../fakaData/userData";

const getParentProject = (taskID) => {
  let output;
  data.projects.forEach((project) =>
    project.tasks.forEach((task) => {
      if (task.id === taskID) {
        output = task;
      }
    })
  );
  return output;
};

export default getParentProject;
