import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

export default function Newsletter({ subscribe, status, message }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.includes('@')) {
            subscribe({
                Email: email
            });
        }
    };

    const clearFields = () => {
        setEmail('');
    };

    return (
        <Container>
            <Col lg={12}>
            <div className='newsletter-bx'>
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter</h3>
                        {status === 'sending' && <Alert aria-live="polite">Sending...</Alert>}
                        {status === 'error' && <Alert variant='danger' aria-live="polite">{message}</Alert>}
                        {status === 'success' && <Alert variant='success' aria-live="polite">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className='new-email-bx'>
                                <input 
                                    value={email} 
                                    type='email' 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder='Email Address' 
                                    required
                                />
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
        </Container>
    );
}
