import React, { useEffect, useState } from "react";

import "../styles/footer.css";

export default function Footer() {
  const [modeSelected, setModeSelected] = useState("img-mode");


  useEffect(() => {
    const mode = document.body.classList.value;
    setModeSelected(mode);
  }, []);
  return (
    <div className="footerContainer navContainerColor">
      <a
        href="https://www.linkedin.com/in/gonzalo-martins-3b43101b2/"
        target="_blank"
        className="footer-icon-linkedin items"
        rel="noreferrer noopener"
      >
      </a>
      <a
        href="mailto:gonzamartins02@gmail.com"
        target="_blank"
        className="footer-icon-gmail items"
        rel="noreferrer noopener"
      >
      </a>
      <a
        href="https://github.com/GonzaMartins?tab=repositories"
        target="_blank"
        className="footer-icon-github items"
        rel="noreferrer noopener"
      >
        </a>
    </div>
  );
}
