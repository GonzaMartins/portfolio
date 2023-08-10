import React from "react";
import TypeIt from "typeit-react";

export default function Text({ getBeforeInit, options }) {
  return (
    <div className="App ">
      <TypeIt options={options} getBeforeInit={getBeforeInit} />
    </div>
  );
}
