import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
            <TrackVisibility>
               {({ isVisible }) => 
               <div className={isVisible ? 'animate__animated animate__bounce' : ''}>
              <h2>Skills</h2>
              <p>
                I completed a Full Stack Development program with a focus on Frontend Development. I have expertise in HTML, CSS, JavaScript, Bootstrap, and ReactJS. I also gained knowledge in Node.js, Express.js, Firebase, and MongoDB for Backend Development through Brassy Academy and Consulting.
              </p>
              </div>}
              </TrackVisibility>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src={meter1} alt="HTML Skill Meter" />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt="CSS Skill Meter" />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="JavaScript Skill Meter" />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="Bootstrap Skill Meter" />
                  <h5>React Developer</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt="ReactJS Skill Meter" />
                  <h5> Frontend Developer</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="Node.js Skill Meter" />
                  <h5>Accounting and Financial Reporting</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="Express.js Skill Meter" />
                  <h5>Prepare Journals and Vouchers</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt="MongoDB Skill Meter" />
                  <h5>Proficient in Microsoft Excel</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt="Decorative background" />
    </section>
  );
}
