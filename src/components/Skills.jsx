import React from "react";
import "../styles/skills.css";
import Typical from "./Typical";
import js from "../icons/js.png";
import css from "../icons/css.png";
import html from "../icons/html.png";
import node from "../icons/node.png";
import react from "../icons/react.png";
import git from "../icons/git.png";
import mui from "../icons/mui.png";
import sql from "../icons/sql.png";
import mongo from "../icons/mongoDB.png";
import { useTranslation } from "react-i18next";

export default function Skills() {
  let options = {
    strings: ["Habilidades"],
    speed: 90,
    waitUntilVisible: true,
  };

  let optionsEn = {
    strings: ["Skills"],
    speed: 90,
    waitUntilVisible: true,
  };

  const { i18n } = useTranslation();
  let lng = i18n.translator.language;


  let technologies = [
    { src: react, name: "React.js" },
    { src: js, name: "Javascript" },
    { src: css, name: "CSS" },
    { src: html, name: "HTML" },
    { src: node, name: "Node.js" },
    { src: mongo, name: "Mongo DB" },
    { src: sql, name: "SQL" },
    { src: git, name: "Git" },
    { src: mui, name: "Material UI" },
  ];

  function newSkill(tech) {
    return (
      <div className="divIcons" key={tech.name}>
        <img className="icons" alt="skill" src={tech.src} />
        <div className="technologieName">{tech.name}</div>
      </div>
    );
  }

  return (
    <div className="skills">
      {/* <div className="divImages aboutMeImgs">
                <img src={yo}  className='computerImg' alt="Computer image"/>
            </div> */}
      <div className="skillsContainer">
        <div className="typical titles skillsTitle">
          {/* <Typical options={options} /> */}
          {lng === 'es'?
            <Typical
            options={options}
              />: null
          }
           {lng === 'en'?
            <Typical
            options={optionsEn}
              /> : null
          }
        </div>
        <div className="divTechnologies  technologiesContainer">
          {technologies.map((tech) => {
            return newSkill(tech);
          })}
        </div>
      </div>
    </div>
  );
}
