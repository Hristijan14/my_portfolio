import React from "react";
import "./SkillsCard.css";

const SkillsCard = ({ img, title }) => {
  return (
    <div className="skillsCard-container">
      <img className="skillImg" src={img} alt="Skill" />
      <p className="skillsTitle">{title}</p>
    </div>
  );
};

export default SkillsCard;
