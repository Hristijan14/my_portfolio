import React from "react";
import ProjectsCard from "../projectsCard/ProjectsCard";
import "./Projects.css";
import project_1 from "../../assets/images/project_1.png";
import project_2 from "../../assets/images/project_2.png";
import project_3 from "../../assets/images/project_3.png";

const Projects = () => {
  return (
    <div>
      <h3 className="projectTitle">Projects:</h3>
      <div className="project-container">
        <a
          href="https://project1-dead-by-daylight.netlify.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ProjectsCard img={project_1} />
        </a>
        <a
          href="https://project2-note-book.netlify.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ProjectsCard img={project_2} />
        </a>
        <a
          href="https://project3-e-comm-app.netlify.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          <ProjectsCard img={project_3} />
        </a>
      </div>
    </div>
  );
};

export default Projects;
