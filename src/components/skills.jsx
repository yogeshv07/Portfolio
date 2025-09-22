import React from "react";
import "./skills.css";

const icons = [
  "/assets/skills/html.png",
  "/assets/skills/css.png",
  "/assets/skills/js.png",
  "/assets/skills/node.png",
  "/assets/skills/python.png",
  "/assets/skills/java.png",
  "/assets/skills/C.png",
  "/assets/skills/C++.png",
  "/assets/skills/mongodb.png",
];

const SkillsTrain = () => {
  // duplicate icons for seamless infinite scroll
  const loopedIcons = [...icons, ...icons];

  return (
    <section className="skills-train-container">
      <div className="skills-train">
        {loopedIcons.map((icon, idx) => (
          <img key={idx} src={icon} alt="skill icon" className="train-icon" />
        ))}
      </div>
    </section>
  );
};

export default SkillsTrain;
