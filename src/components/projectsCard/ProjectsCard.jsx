import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ img }) => {
  return (
    <div className="projectCard-container">
      <img className="projectImg" src={img} alt="project" />
    </div>
  );
};

export default ProjectsCard;
