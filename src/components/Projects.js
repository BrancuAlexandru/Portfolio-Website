import React from 'react';

const Square = () => {
  return (
    <div className="square"></div>
  );
}

const Squares = () => {
  return (
    <div className="squares"></div>
  );
}

const Projects = () => {
  return (
    <section className="Projects Container">
      <h1 className="section-title">Projects</h1>
      <div className="film">
        <Squares />
        <div className="projects-content">
          <div className="project">
            <img src="./images/firstProject.png" className="project-image"/>
          </div>
          <div className="project">
            <img src="./images/secondProject.png" className="project-image"/>
          </div>
          <div className="project">
            <img src="./images/thirdProject.png" className="project-image"/>
          </div>
        </div>
        <Squares />
      </div>
    </section>
  );
}

export default Projects;