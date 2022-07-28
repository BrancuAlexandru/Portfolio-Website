import React from 'react';
import projectsData from '../../data/ProjectsData';

const TechnologySection = (props) => {
  return (
    <div className="project-menu-technology-section">
      <div className="technology-top">
        <p>{projectsData[props.selectedProjectIndex].technology.body}</p>
      </div>
      <div className="technology-bottom">
        {projectsData[props.selectedProjectIndex].technology.skills.map((skill, id) => {
          return (
            <h3 key={id}>{skill}</h3>
          )
        })}
      </div>
    </div>
  )
}

export default TechnologySection;