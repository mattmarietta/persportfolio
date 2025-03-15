import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Machine Learning Model",
      description: "1st place Datathon Machine Learning Model to predict Avg. disbursed Loans in the supervised learning pillar.",
      imgUrl: projImg3,
      url: "https://github.com/mattmarietta/AIxDATAxFinal",
    },
    {
      title: "Motor Munchies",
      description: "Food Truck Finder",
      imgUrl: projImg1,
      url: "https://github.com/mattmarietta/motor_munchies",
    },
    {
      title: "Soccer Analyzer",
      description: "Soccer Statistics App",
      imgUrl: projImg2,
      url: "https://github.com/mattmarietta/soccer-analyzer",
    },
    {
      title: "The Aprendizaje",
      description: "Language Learning App",
      imgUrl: projImg3,
      url: "https://github.com/mattmarietta/motor_munchies",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects implemented from free time and also my classes.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
