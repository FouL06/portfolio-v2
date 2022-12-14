// Import Plugins
import React from "react";

// Import Components
import Head from "../Head/head";

const Layout = ({ children }) => {
  //TODO: add nav and footer components before and after root div.
  return (
    <>
      <Head />
      <div id="root">{children}</div>
    </>
  );
};

export default Layout;
