import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nav1 from "../assets/images/nav-icon1.svg";
import nav2 from "../assets/images/nav-icon2.svg";
import nav3 from "../assets/images/nav-icon3.svg";
import gmail from "../assets/images/gmail-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <p>
              Call me on my phone number:{" "}
              <a href="tel:0569772539">
                {" "}
                <p className="phone">0569772539</p>
              </a>
            </p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:sarazebdeh19@gmail.com">
                <img src={nav1} alt="linkedIn" />
              </a>
              <a href="">
                <img src={nav2} alt="facebook" />
              </a>
              <a href="">
                <img src={nav3} alt="instgram" />
              </a>
            </div>

            <p>&lt;&lt;&lt; &copy; Sara Zebdeh &gt;&gt;&gt;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
