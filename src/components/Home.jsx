import React, { useState } from "react";
import "../styles/home.css";
import "../styles/aboutMe.css";
import Typical from "./Typical";
import asd from "../imgs/asd.png";
import { useTranslation } from "react-i18next";
import cv from "../pdf/cv.pdf";
export default function Home() {
  const { t, i18n } = useTranslation();
  let lng = i18n.translator.language;
  const [showPdf, setShowPdf] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.target = "_blank"; // Abrir en una nueva pestaña
    link.download = "Gonzalo Martins - CV.pdf"; // Nombre del archivo
    link.click();
  };

  const handleViewPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  }
  
  return (
    <div className="home">
      <div className="divTitles">
        <div className="title titles titleHome">
          <div>
            {t("Home.Hi")} <br />
            {t("Home.Presentation")}
          </div>
          <div className="typical">
            {lng === "es" ? (
              <Typical
                options={{
                  loop: false,
                  strings: ["Soy desarrollador full-stack"],
                  waitUntilVisible: true,
                  speed: 90,
                }}
              />
            ) : null}
            {lng === "en" ? (
              <Typical
                options={{
                  loop: false,
                  strings: ["I am a full stack developer"],
                  waitUntilVisible: true,
                  speed: 90,
                }}
              />
            ) : null}
          </div>
        </div>
        <div className="animation_right divButtons">
          <button className="buttonCv buttons" onClick={handleDownload}>
            {" "}
            {t("Home.DownloadCv")}
          </button>
          <button onClick={handleViewPdf} className="buttonCv buttons buttonVisualizer">
            {t("Home.ViewCv")}
          </button>
          
        </div>
      </div>
      <div>
        <div className="smallIconsHome smallCoffe home-icon-coffe"></div>
        <div className="smallIconsHome smallSmarthphone  home-icon-smarthphone"></div>
        <div className="divImages">
          <img src={asd} className="computerImg" alt="Computer image" />
        </div>
        <div
          className="smallIconsHome smallComputer home-icon-computer"
          alt="computer"
        ></div>
      </div>
      {showPdf && (
        <div className="pdfOverlay">
          <div className="pdfContainer">
            <iframe src={cv} width="100%" height="100%" title="CV"></iframe>
            <button className="closeButton" onClick={handleClosePdf}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
