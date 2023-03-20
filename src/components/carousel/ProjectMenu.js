import React, { useState, useEffect } from 'react';
import ProjectMenuSection from './ProjectMenuSection';

const ProjectMenu = (props) => {
  const [activeSection, setActiveSection] = useState(0);
  const [colors, setColors] = useState({
    photos: "#a203f8"/* "#a203f8" */,
    technology: "white",
    caseStudy: "white"
  });
  const changeColor = (section) => { // section might be undefined?
    if (section === 2) {
      setColors({
        photos: "white",
        technology: "white",
        caseStudy: props.highlightColor
      });
    } else if (section === 1) {
      setColors({
        photos: "white",
        technology: props.highlightColor,
        caseStudy: "white"
      });
    } else {
      setColors({
        photos: props.highlightColor,
        technology: "white",
        caseStudy: "white"
      });
    }
  }
  return (
    <div>
      { props.menuIsActive &&
      <div className="project-menu">
        <div className="project-menu-top">
          <div className="project-menu-section-button cta">
            <a onClick={() => {
              setActiveSection(0);
              changeColor(0);
            }}
            style={{color: colors.photos}}
            >
              Photos
            </a>
            <a onClick={() => {
              setActiveSection(1);
              changeColor(1);
            }}
            style={{color: colors.technology}}
            >
              Technology
            </a>
            <a onClick={() => {
              setActiveSection(2);
              changeColor(2);
            }}
            style={{color: colors.caseStudy}}
            >
              Case Study
            </a>
          </div>
          <a className="close-menu-button" onClick={() => {
            props.toggleMenu();
            setActiveSection(0);
            changeColor(0);
          }}>
          </a>
        </div>
        <a className="project-menu-left-arrow" onClick={() => {
          if (activeSection > 0) {
            setActiveSection(activeSection - 1);
            changeColor(activeSection - 1);
          } else {
            setActiveSection(2);
            changeColor(2);
          }
          }}
        >
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
        <div className="project-menu-section">
          <ProjectMenuSection selectedProjectIndex={props.selectedProjectIndex} activeSection={activeSection} theme={props.theme}/>
        </div>
        <a className="project-menu-right-arrow" onClick={() => {
          if (activeSection < 2) {
            setActiveSection(activeSection + 1);
            changeColor(activeSection + 1);
          } else {
            setActiveSection(0);
            changeColor(0);
          }
          }}
        >
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
      </div>}
    </div>
  )
}

export default ProjectMenu;