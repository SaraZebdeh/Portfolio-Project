import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import metre1 from "../assets/images/meter1.svg";
import metre2 from "../assets/images/meter2.svg";
import metre3 from "../assets/images/meter3.svg";
import colorSharp from "../assets/images/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" od="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                CSS references of all properties and selectors with.<br></br>{" "}
                syntax, examples, browser support, and more.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={metre1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={metre2} alt="Image" />
                  <h5>Problem Solving</h5>
                </div>
                <div className="item">
                  <img src={metre3} alt="Image" />
                  <h5>Self Learning</h5>
                </div>
                <div className="item">
                  <img src={metre1} alt="Image" />
                  <h5>Communication Skills</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
