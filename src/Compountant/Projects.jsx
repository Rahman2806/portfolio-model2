import React from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/age.png';
import projImg2 from '../assets/img/emi.png';
import projImg3 from '../assets/img/TIC TAC TOE game.png';
import projImg4 from '../assets/img/Applic.png';
import projImg5 from '../assets/img/Weather.png';
import projImg6 from '../assets/img/To-Do list.png';
import projImg7 from '../assets/img/Portfolio1.png';
import projImg8 from '../assets/img/Portfolio2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects() {
  const htmlCssJsProjects = [
    {
      title: "Age Calculation",
      description: "Academy Project",
      imgUrl: projImg1,
    },
    {
      title: "EMI Calculation",
      description: "Academy Project",
      imgUrl: projImg2,
    },
    {
      title: "Tic Tac Toe Game",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const reactJsProjects = [
    {
      title: "Application Form",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "To-Do List App",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const frontendProjects = [
    {
      title: "First Portfolio",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Second Portfolio",
      description: "Design & Development",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
               {({ isVisible }) => 
               <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
            <h2>Projects</h2>
            <p>Developed a variety of projects using HTML, CSS, JavaScript, and ReactJS. Demonstrated expertise in component-based architecture, responsive layouts, and modern user interface design.</p>
            </div>}
          </TrackVisibility>
            <Tab.Container id='projects-tab' defaultActiveKey="html-css-js">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center'>
                <Nav.Item>
                  <Nav.Link eventKey="html-css-js">HTML/CSS/JavaScript</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="react-js">ReactJS Framework</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="frontend">Frontend Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="html-css-js">
                  <Row>
                    {htmlCssJsProjects.map((project, index) => (
                      <ProjectCard 
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="react-js">
                  <Row>
                    {reactJsProjects.map((project, index) => (
                      <ProjectCard 
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="frontend">
                  <Row>
                    {frontendProjects.map((project, index) => (
                      <ProjectCard 
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt="Background decoration" />
    </section>
  );
}
