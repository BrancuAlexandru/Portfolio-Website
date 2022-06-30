import React from 'react';

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
        <div className="FirstSquare"></div>
          {squareArray.map((item) => item)}
        <div className="LastSquare"></div>
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