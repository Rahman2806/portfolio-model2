import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/LOGO.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6}>
                    <img src={logo} alt="Company Logo" className="img-fluid" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/abdul2806/" aria-label="LinkedIn">
                            <img src={navIcon1} alt="LinkedIn Icon" className="social-icon-img" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100029185271449" aria-label="Facebook">
                            <img src={navIcon2} alt="Facebook Icon" className="social-icon-img" />
                        </a>
                        <a href="https://www.instagram.com/nahim_abdul_rahman/" aria-label="Instagram">
                            <img src={navIcon3} alt="Instagram Icon" className="social-icon-img" />
                        </a>
                    </div>
                </Col>
            </Row>
            <p className='text-center'>CopyRight 2024. All Rights Reserved by Abdul Rahman.</p>
        </Container>
    </footer>
  );
}
