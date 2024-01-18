import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Card from "./Card";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import todo from "../assets/images/todo List.png";
import GP from "../assets/images/GP.png";
import table from "../assets/images/table.png";
import home from "../assets/images/home.png";
import Pizza from "../assets/images/Pizza.png";
import menu from "../assets/images/menu.png";
import about from "../assets/images/about.png";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Graduation Project",
      description: "Training Management System- Login Page",
      imgUrl: GP,
    },
    {
      title: "Tables",
      description: "Structured from scratch",
      imgUrl: table,
    },
    {
      title: "Home Page",
      description: "Design Home page and using Snackbars",
      imgUrl: home,
    },
  ];

  const projects2 = [
    {
      title: "Pizza Store",
      description: "Design a website for Pizza Restaurant ",
      imgUrl: Pizza,
    },
    {
      title: "About Page",
      description: "Design a page include information about a restaurant ",
      imgUrl: about,
    },
    {
      title: "Menu",
      description: "Design menu Resturant",
      imgUrl: menu,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="animate__animated animate__fadeIn">
              <h2>Projects</h2>
              <p>
                Here Some Projects I made using React, MUI, Typescript, HTML,
                CSS, and PHP{" "}
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className="animate__animated animate__slideInUp"
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <Card key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects2.map((project, index) => {
                        return <Card key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
