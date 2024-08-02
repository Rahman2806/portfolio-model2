import React, { useEffect, useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiArrowRightCircle } from 'react-icons/fi';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ['Web Designer', 'Full Stack Developer', 'MERN Stack Developer'];
    const period = 2000;

    const updateText = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updateText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(prevLoopNum => prevLoopNum + 1);
            setDelta(500);
        }
    }, [text, isDeleting, loopNum, toRotate]);

    useEffect(() => {
        const interval = setInterval(updateText, delta);
        return () => clearInterval(interval);
    }, [updateText, delta]);

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <span className='tagline'>Welcome to My Portfolio</span>
                                    <h1>{`Hi I'm Abdul Rahman`} <span className='wrap'>{text}</span></h1>
                                    <p>
                                        I design visually appealing and user-friendly websites. My goal is to help and satisfy clients with top-notch web development solutions.
                                    </p>
                                    <button 
                                        onClick={() => console.log('connect')} 
                                        aria-label="Connect with me"
                                    >
                                        Let's Connect <FiArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Illustration" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
