// Import Plugins
import React from "react";

// Import CSS & Images
import logo from "../../images/Logo.svg";
import * as styles from "./Navbar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  return (
    <Navbar expand="md" variant="dark" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/#Hero" id={styles.brand}>
          <img
            className={styles.logo}
            src={logo}
            alt="Ashton Foulger"
            height="42"
            width="42"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.toggler}
        >
          <i class="bi bi-list" />
        </Navbar.Toggle>
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="/#About">About</Nav.Link>
            <Nav.Link href="/#Skills">Skills</Nav.Link>
            <Nav.Link href="/#Work">Work</Nav.Link>
            <Nav.Link href="/#Projects">Projects</Nav.Link>
            <Nav.Link href="/#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
