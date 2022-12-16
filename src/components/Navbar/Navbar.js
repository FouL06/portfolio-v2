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
    <Navbar expand="md" className={styles.navbar}>
      <Container fluid>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/#About" className={styles.navItem}>
              About
            </Nav.Link>
            <Nav.Link href="/#Skills" className={styles.navItem}>
              Skills
            </Nav.Link>
            <Nav.Link href="/#Work" className={styles.navItem}>
              Work
            </Nav.Link>
            <Nav.Link href="/#Projects" className={styles.navItem}>
              Projects
            </Nav.Link>
            <Nav.Link href="/#Contact" className={styles.navItem}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
