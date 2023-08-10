import React, { useState } from "react";
import "../styles/projects.css";
import Card from "./Card";
import imgNasa from "../imgs/Proyectos/nasapp-home.png";
import imgClima from "../imgs/Proyectos/climapp-desktop.png";
import imgMemotest from "../imgs/Proyectos/memotest-desktop.png";
import imgLavadero from "../imgs/Proyectos/lavadero.png";
import imgTodo from "../imgs/Proyectos/todoApp-home.png";
import "../styles/footer.css";
import "../styles/nav.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  const proyectsData = [
    {
      title: "Proyects.GestorName",
      description:
        "Proyects.Gestor",
      githubLink: "https://github.com/stars/GonzaMartins/lists/gestor-lavadero",
      // description: {t("Proyects.Memotest")},
      videoLink:
        "https://www.loom.com/share/5e8ef9975f69445ebd4d14bea86153ab?sid=cf01c799-adf6-45ee-8dbb-d503843b8245",
    },
    {
      title: "Memotest",
      description: "Proyects.Memotest",
      githubLink: "https://github.com/GonzaMartins/memotest-app",
      // description: {t("Proyects.Memotest")},
      link: "https://memotestapp.netlify.app",
    },
    {
      title: "Nasa app",
      description: "Proyects.Nasa",
      githubLink: "https://github.com/GonzaMartins/nasa-api",
      videoLink:
        "https://www.loom.com/share/84a295168f7c41a388d44b2570bf60be?sid=c4877661-aba0-4472-b781-c7ca03e2816f",
    },
    {
      title: "Proyects.ClimaName",
      description: "Proyects.Clima",
      githubLink: "https://github.com/GonzaMartins/clima-app",
      link: "https://climapp-gonzamartins.netlify.app",
    },
    {
      title: "Todo app",
      description: "Proyects.Todo",
      githubLink: "https://github.com/GonzaMartins/todo-app",
      videoLink:
        "https://www.loom.com/share/643d2b66d9e142c7aeb807381bb9746d?sid=30f10f12-adf3-4400-a47e-ba7ebb610375",
    },
  ];

  const [imageNumber, setImageNumber] = useState("first");
  const [proyectSelected, setProyectSelected] = useState(proyectsData[0]);

  let handleOnClick = (number, position) => {
    setImageNumber(number);
    setProyectSelected(proyectsData[position]);
  };

  let isThisImage = (number) => {
    if (imageNumber === number) {
      return "active";
    }
  };

  return (
    <div className="proyectsContainer">
      <div className="proyectInformation">
        <div className="informationContainer">
          <div className="titles titleProyectColor">
            {/* {proyectSelected.title} */}
            {t(proyectSelected.title)}
          </div>
          <div className="text textDescription">
            {t(proyectSelected.description)}
          </div>
        </div>
        <div className="linksContainer">
          <a
            href={proyectSelected.githubLink}
            target="_blank"
            className="footer-icon-github items githubLinkContainer"
            rel="noreferrer noopener"
          />
          {proyectSelected.link ? (
            <a
              className="lang langMode"
              href={proyectSelected.link}
              target="_blank"
              rel="noreferrer noopener"
            />
          ) : null}
          {proyectSelected.videoLink ? (
            <a
              className="video"
              target="_blank"
              rel="noreferrer noopener"
              href={proyectSelected.videoLink}
            />
          ) : null}
        </div>
      </div>
      <div className="projects carrousel borderImage">
        <div className={`carrouselDiv ${imageNumber}`}>
          <Card img={imgLavadero} />
          <Card img={imgMemotest} />
          <Card img={imgNasa} />
          <Card img={imgClima} />
          <Card img={imgTodo} />
        </div>
        <div className="points">
          <div
            className={`point ${isThisImage("first")}`}
            onClick={() => handleOnClick("first", 0)}
          ></div>
          <div
            className={`point ${isThisImage("second")}`}
            onClick={() => handleOnClick("second", 1)}
          ></div>
          <div
            className={`point ${isThisImage("third")}`}
            onClick={() => handleOnClick("third", 2)}
          ></div>
          <div
            className={`point ${isThisImage("fourth")}`}
            onClick={() => handleOnClick("fourth", 3)}
          ></div>
          <div
            className={`point ${isThisImage("fifth")}`}
            onClick={() => handleOnClick("fifth", 4)}
          ></div>
        </div>
      </div>
    </div>
  );
}
