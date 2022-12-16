// Import Plugins
import React from "react";

// Import Components
import Head from "../Head/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Import CSS
import "./layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Navbar />
      <div id="root">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
