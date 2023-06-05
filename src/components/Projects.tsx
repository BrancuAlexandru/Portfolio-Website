import { FC, useState } from 'react';
import ProjectMenu from './carousel/ProjectMenu';

const Projects:FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  }
  const showProjectMenuWrapper = () => {
    document.body.getElementsByClassName("project-menu-wrapper")[0].setAttribute("style", "display: flex");
    document.body.setAttribute("style", "overflow: hidden");
    document.body.getElementsByClassName('back-to-top-arrow')[0].setAttribute("style", "display: none");
  }
  return (
    <section className="Projects" id="Projects">
      <h1>Projects</h1>
      <div className="film">
        <TopSquares />
        <div className="projects-content">
          <div className="blank-project-right"></div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(0);
            setMenuIsActive(true);
            showProjectMenuWrapper();
            }}>
            <div className="project-image">
              <img src="./images/authentication.webp" alt="screenshot of the log in for the project" loading="lazy"/>
            </div>
          </div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(1);
            setMenuIsActive(true);
            showProjectMenuWrapper();
            }}>
            <div className="project-image">
              <img src="./images/landingPage.webp" alt="screenshot of the portfolio" loading="lazy"/>
            </div>
          </div>
          <div className="project cta" onClick={() => {
            setSelectedProjectIndex(2);
            setMenuIsActive(true);
            showProjectMenuWrapper();
            }}>
            <div className="project-image">
              <img src="./images/gamefinderScreenshot.webp" alt="screenshot of Gamefinder extension" loading="lazy"/>
            </div>
          </div>
          <div className="blank-project-left"></div>
        </div>
        <BottomSquares />
        <div className="film-backside"></div>
      </div>
      <ProjectMenu selectedProjectIndex={selectedProjectIndex} menuIsActive={menuIsActive} toggleMenu={toggleMenu} />
    </section>
  );
}

const TopSquares = () => {
  const makeOneSquare = (key:number) => {
    return (
      <div className="Square" key={key}></div>
    );
  }
  // Returning n number of 'Square' divs with unique keys (i) into an array mapped inside 'TopSquares'
  const makeSquares = (n:number) => {
    let squareArray = [];
    for (let i = 0; i < n; i++) {
      squareArray[i] = makeOneSquare(i);
    }
    return (
      <div className="TopSquares">
        <div className="first-square"></div>
          {squareArray.map((item) => item)}
        <div className="last-square"></div>
      </div>
    );
  }
  return (
    <div className="film-square-strip-container">
      {makeSquares(32)}
    </div>
  );
}

const BottomSquares = () => {
  const makeOneSquare = (key: number) => {
    return (
      <div className="Square" key={key}></div>
    );
  }
  // Returning n number of 'Square' divs with unique keys (i) into an array mapped inside 'BottomSquares'
  const makeSquares = (n: number) => {
    let squareArray = [];
    for (let i = 0; i < n; i++) {
      squareArray[i] = makeOneSquare(i);
    }
    return (
      <div className="BottomSquares">
        <div className="first-square"></div>
          {squareArray.map((item) => item)}
        <div className="last-square"></div>
      </div>
    );
  }
  return (
    <div className="film-square-strip-container">
      {makeSquares(32)}
    </div>
  );
}

export default Projects;