import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nav1 from "../assets/images/nav-icon1.svg";
import nav2 from "../assets/images/nav-icon2.svg";
import nav3 from "../assets/images/nav-icon3.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={nav1} />
              </a>
              <a href="">
                <img src={nav2} />
              </a>
              <a href="">
                <img src={nav3} />
              </a>
            </div>
            <p>CopyRight 2024, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
