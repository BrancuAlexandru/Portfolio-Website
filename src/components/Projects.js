import React from 'react';

const Square = () => {
  return (
    <div className="square"></div>
  );
}

const Squares = () => {
  return (
    <div className="squares">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

const Projects = () => {
  return (
    <section className="Projects">
      <h1>Projects</h1>
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