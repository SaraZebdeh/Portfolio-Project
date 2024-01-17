import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Header from "../assets/images/header-img.svg";
import { useState, useEffect } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Banner = () => {
  const toRotate = ["Web Designer", "Frontend Developer", "UI Designer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-centre">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div
                className={isVisible ? "animated_animated animate_fadeIn" : ""}
              >
                <span className="tagline">Welcome to my Project</span>
                <h1>
                  {`Hi I'm Sara, I'am `} <span className="wrap"> {text}</span>
                </h1>
                <p>
                  React Project Tutorial: Build a Responsive Portfolio Website
                  w/ Advanced Animations
                </p>
                <Button onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </Button>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={Header} alt="Hedder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
