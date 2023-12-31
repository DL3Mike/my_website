// ProjectDetail.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image}/>
      {/* Add more details as needed */}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ProjectDetail;
