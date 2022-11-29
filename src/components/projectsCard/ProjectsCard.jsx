import "./ProjectsCard.css";

const ProjectsCard = ({ img, title }) => {
  return (
    <div className="projectCard-container">
      <img className="projectImg" src={img} alt="project" />
      <p className="Info">{title}</p>
    </div>
  );
};

export default ProjectsCard;
