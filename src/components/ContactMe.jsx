import "../styles/contactMe.css";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

export default function ContactMe() {
  
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("xjvdjdvn");
  if (state.succeeded && !isOpen) {
    setIsOpen(true);
  }

  return (
    <div className="contactMe">
      <div className="cmContainer cmContainerColor titlesCM">
        <form className="inputContainer" onSubmit={handleSubmit}>
          <div className="titlesContactMe titlesCM">{t("ContactMe.LeaveMsj")}</div>
          <div className="labelContainer ">
            <label className="labelInput">{t("ContactMe.Name")}</label>
            <input
              className="inputCM"
              type="text"
              id="name"
              name="name"
            ></input>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="labelContainer">
            <label className="labelInput">{t("ContactMe.Email")}</label>
            <input
              className="inputCM"
              type="text"
              id="Email"
              name="Email"
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div> 
          <div className="labelContainer">
            <label className="labelInput">{t("ContactMe.Message")}</label>
            <input
              className="inputCM"
              type="text"
              id="Mensaje"
              name="Mensaje"
            ></input>
            <ValidationError
              prefix="Mensaje"
              field="Mensaje"
              errors={state.errors}
            />
          </div>
          <button
            className="buttonCm buttonCv buttons"
            disabled={isOpen}
            type="submit"
          >
            {t("ContactMe.Send")}
          </button>
        </form>
        <div className="moreInformationContainer miColor">
          <div className="titlesContactMe titlesCM">{t("ContactMe.MoreInfo")}</div>
          <div className="titlesCM">
            <div className="iconContainer">
              <a
                href="https://www.linkedin.com/in/gonzalo-martins-3b43101b2/"
                target="_blank"
                className="footer-icon-linkedin items"
                rel="noreferrer noopener"
              />
              <div>Linkedin</div>
            </div>
            <div className="iconContainer">
              <a
                href="https://github.com/GonzaMartins?tab=repositories"
                target="_blank"
                className="footer-icon-github items"
                rel="noreferrer noopener"
              />
              <div>Github</div>
            </div>
          </div>
        </div>
      </div>
      {isOpen ? (
        <Stack sx={{ width: "100%" }} spacing={2} className="alertContainer">
          <Alert
            className="alertStyle"
            icon={
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="MuiSvgIcon-root alertStyle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
          >
            Tu mensaje se ha enviado con exito!
          </Alert>
        </Stack>
      ) : null}
    </div>
  );
}
