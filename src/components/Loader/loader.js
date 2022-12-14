// Import Plugins
import React from "react";
import logo from "../../images/Foul-Logo.svg";

// Import CSS
import { loaderWrapper } from "./loader.module.css";

const Loader = () => {
  const loader = document.getElementById("#loader-wrapper");
  window.addEventListener("load", () => {
    loader.fadeOut("slow");
  });

  return (
    <div id={loaderWrapper}>
      <img src={logo} height="250" width="250" alt="logo img" />
    </div>
  );
};

export default Loader;
