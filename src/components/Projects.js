import React from 'react';

const Square = () => {
  return (
    <div className="Square"></div>
  );
}
const FirstSquare = () => {
  return (
    <div className="FirstSquare"></div>
  );
}
const LastSquare = () => {
  return (
    <div className="LastSquare"></div>
  );
}

const Squares = () => {
  return (
    <div className="Squares">
      <FirstSquare />
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
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <LastSquare />
    </div>
  );
}

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <h1>Projects</h1>
      <div className="film">
        <Squares />
        <div className="projects-content">
          <div className="project cta">
            <div className="project-image">
              <img src="./images/firstProject.png" alt=""/>
            </div>
          </div>
          <div className="project cta">
            <div className="project-image">
              <img src="./images/secondProject.png" alt=""/>
            </div>
          </div>
          <div className="project cta">
            <div className="project-image">
              <img src="./images/thirdProject.png" alt=""/>
            </div>
          </div>
        </div>
        <Squares />
      </div>
    </section>
  );
}

export default Projects;