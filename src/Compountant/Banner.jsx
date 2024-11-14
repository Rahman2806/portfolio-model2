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
    const toRotate = ['B.Com', 'MBA (IT Management)', 'Web Developer',];
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
                                    A motivated and detail-oriented fresher with a Bachelor’s degree in Commerce (B.Com) and currently pursuing an MBA in IT Management with a focus on Online Programming. Possessing a strong foundation in web development, MS Excel, and accounting concepts, with the ability to apply technical skills to real-world business scenarios. Currently expanding expertise in programming with a focus on Golang programming Language. Seeking an entry-level position where I can leverage my technical skills, problem-solving abilities, and academic knowledge to contribute effectively to a growing organization.
                                    </p>
                                    <button>
                                       <a href={'https://www.canva.com/design/DAGVVfN3vxo/3t6zgqXgUg9AI0oSTzLing/view?utm_content=DAGVVfN3vxo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdc8ee3cd51'}> My Resume <FiArrowRightCircle size={25} /></a>
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
