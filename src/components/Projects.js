import React from 'react';
import ProjectMenu from './ProjectMenu'

const renderProjectMenu = (id) => {
  return <ProjectMenu id={id}/>
}

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <h1>Projects</h1>
      <div className="film">
        <Squares />
        <div className="projects-content">
          <div className="blank-project-right"></div>
          <div className="project cta" onClick={() => renderProjectMenu(0)}>
            <div className="project-image">
              <img src="./images/firstProject.webp" alt="screenshot of google.com"/>
            </div>
          </div>
          <div className="project cta" onClick={() => renderProjectMenu(1)}>
            <div className="project-image">
              <img src="./images/firstProject.webp" alt="screenshot of google.com"/>
            </div>
          </div>
          <div className="project cta" onClick={() => renderProjectMenu(2)}>
            <div className="project-image">
              <img src="./images/firstProject.webp" alt="screenshot of google.com"/>
            </div>
          </div>
          <div className="blank-project-left"></div>
        </div>
        <Squares />
        <div className="film-backside"></div>
      </div>
    </section>
  );
}

const Squares = () => {
  const makeOneSquare = (key) => {
    return (
      <div className="Square" key={key}></div>
    );
  }
  // Returning n number of 'Square' divs with unique keys (i) into an array mapped inside 'Squares'
  const makeSquares = (n) => {
    let squareArray = [];
    for (let i = 0; i < n; i++) {
      squareArray[i] = makeOneSquare(i);
    }
    return (
      <div className="Squares">
        <div className="first-square"></div>
          {squareArray.map((item) => item)}
        <div className="last-square"></div>
      </div>
    );
  }
  return (
    <div>
      {makeSquares(32)}
    </div>
  );
}

export default Projects;