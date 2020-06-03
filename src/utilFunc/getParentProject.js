import data from "../fakaData/userData";

// const getParentProject = (taskID) => {
//   data.projects.forEach((project) =>
//     project.tasks.forEach((task) => {
//       if (task.id === taskID) return project;
//     })
//   );
// };

const getParentProject = (taskID) => {
  let output;
  data.projects.forEach((project) =>
    project.tasks.forEach((task) => {
      if (task.id === taskID) {
        output = project;
      }
    })
  );
  return output;
};

export default getParentProject;
