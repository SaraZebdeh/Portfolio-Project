import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import { Projects } from "./Projects";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSpecificSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className="navbar-link"
                onClick={() => scrollToSpecificSection("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className="navbar-link"
                onClick={() => scrollToSpecificSection("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="navbar-link"
                onClick={() => scrollToSpecificSection("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button
                className="vvd"
                onClick={() => scrollToSpecificSection("contact")}
              >
                <span>Let's Contact</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};
