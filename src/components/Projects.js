import React, { useState } from 'react';
import ProjectMenu from './carousel/ProjectMenu'

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState();
  const [menuIsActive, setMenuIsActive] = useState(false);
  return (
    <section className="Projects" id="Projects">
      <h1>Projects</h1>
      <div className="film">
        <Squares />
        <div className="projects-content">
          <div className="blank-project-right"></div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(0);
            setMenuIsActive(true);
            // also set ProjectMenu's projectMenuIsOpen to true
            }}>
            <div className="project-image">
              <img src="./images/firstProject.webp" alt="screenshot of google.com"/>
            </div>
          </div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(1);
            setMenuIsActive(true);
            }}>
            <div className="project-image">
              <img src="./images/landingPage.webp" alt="screenshot of the portfolio" style={{objectFit: 'cover', objectPosition: '0 0'}}/>
            </div>
          </div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(2);
            setMenuIsActive(true);
            }}>
            <div className="project-image">
              <img src="./images/firstProject.webp" alt="screenshot of google.com"/>
            </div>
          </div>
          <div className="blank-project-left"></div>
        </div>
        <Squares />
        <div className="film-backside"></div>
      </div>
      {menuIsActive && <ProjectMenu selectedProjectIndex={selectedProjectIndex}/>}
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