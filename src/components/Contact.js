import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../assets/images/contact-img.svg";

const Contact = () => {
  const formDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [details, SetDetails] = useState(formDetails);

  const onFormUpdate = (data, value) => {
    SetDetails({
      ...details,
      [data]: value,
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contact} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Contact with Us</h2>
            <form>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={details.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={details.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={details.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={details.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={details.message}
                    placeholder="Please write a Message here"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
