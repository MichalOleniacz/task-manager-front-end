import React, { useState } from "react";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState(match.params.project);

  console.log(project);
  return (
    <div>
      <h1>ProjectDetails</h1>
    </div>
  );
};

export default ProjectDetails;
