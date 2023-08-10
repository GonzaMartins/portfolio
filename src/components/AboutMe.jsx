import React from "react";
import "../styles/home.css";
import Typical from "./Typical";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  let options = {
    strings: ["Sobre mi"],
    speed: 90,
    waitUntilVisible: true,
  };

  let optionsEn = {
    strings: ["About me"],
    speed: 90,
    waitUntilVisible: true,
  };

  const { t, i18n } = useTranslation();
  let lng = i18n.translator.language;

  return (
    <div className="aboutMe">
      <div className="aboutMeTextContainer ">
        <div className="typical titles aboutMeTitle">
          {lng === "es" ? <Typical options={options} /> : null}
          {lng === "en" ? <Typical options={optionsEn} /> : null}
        </div>
        <div className="textAboutMe  text ">{t("AboutMe.Text")}</div>
      </div>
    </div>
  );
}
