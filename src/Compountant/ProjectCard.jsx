import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title = 'Untitled Project', description = 'No Description', imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt={`${title} Thumbnail`} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
