import React, { useState } from "react";
import MenuIcon from "../imgs/menu.png";
import MenuMobile from "./MenuMobile";
import Switch from "./Switch";
import modeIcon from "../imgs/dark-mode.png";
import "../styles/nav.css";
import { useTranslation } from 'react-i18next';

export default function Nav() {
  const body = document.body;
  const classList = document.body.classList;
  const styles = ["img-mode", "light-mode", "dark-mode"];
  const [styleIndex, setStyleIndex] = useState(1);
  const { t, i18n } = useTranslation();


  function handleOnClick() {

    body.classList.remove(classList[0]);

    setStyleIndex((styleIndex + 1) % styles.length);

    body.classList.add(styles[styleIndex]);
  }

  const mediaQuery = window.matchMedia("(max-width: 700px)");

  let lng = i18n.translator.language

  return (
    <div className="navContainer">
      {/* <Switch /> */}
      {!mediaQuery.matches ? (
        <div className="divNavContainer navContainerColor">
          <div className="divNavItems">
            <a href="#Home" className="items textNav">
              {t('nav.Home')}
            </a>
            <a href="#AboutMe" className="items textNav">
              {t('nav.AboutMe')}
            </a>
            <a href="#Skills" className="items textNav">
              {t('nav.Skills')}
            </a>
            <a href="#Projects" className="items textNav">
              {t('nav.Projects')}
            </a>
            <a href="#ContactMe" className="items textNav">
              {t('nav.ContactMe')}
            </a>
          </div>
          <div className="rightContainer">
          <div onClick={() => i18n.changeLanguage(lng === 'en' ? 'es' : 'en')} className="lang langMode" />
          <div onClick={() => handleOnClick()} className="turn iconMode" />
          </div>
        </div>
      ) : (
        <div className="divNavContainer">
          <MenuMobile />
          <div onClick={() => i18n.changeLanguage(lng === 'en' ? 'es' : 'en')} className="lang langMode" />
          <div onClick={() => handleOnClick()} className="turn iconMode" />
        </div>
      )}
    </div>
  );
}
