import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('manwoojg');

  if (state.succeeded) {
    return (
      <h2 style={{ textAlign: 'center', marginTop: '10px' }}>
        Thanks for your message! I will get back to you soon.
      </h2>
    );
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' className='img-fluid' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <div className='form-group'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                      id='firstName'
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                      required
                      className='form-control'
                    />
                  </div>
                </Col>
                <Col sm={6} className='px-1'>
                  <div className='form-group'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                      id='lastName'
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                      required
                      className='form-control'
                    />
                  </div>
                </Col>
                <Col sm={6} className='px-1'>
                  <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='Email Address'
                      required
                      className='form-control'
                    />
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </div>
                </Col>
                <Col sm={6} className='px-1'>
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone No.</label>
                    <input
                      id='phone'
                      type='tel'
                      name='phone'
                      placeholder='Phone No.'
                      required
                      className='form-control'
                    />
                  </div>
                </Col>
                <Col>
                  <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                      id='message'
                      name='message'
                      rows='6'
                      placeholder='Message'
                      required
                      className='form-control'
                    />
                    <ValidationError
                      prefix='Message'
                      field='message'
                      errors={state.errors}
                    />
                  </div>
                  <button type='submit' disabled={state.submitting} className='btn btn-primary'>
                    {state.submitting ? 'Sending...' : 'Send'}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
