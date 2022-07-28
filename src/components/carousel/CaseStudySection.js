import React, { useState } from 'react';
import projectsData from '../../data/ProjectsData';

const CaseStudySection = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  return (
    <div className="project-menu-case-study-section">
      <a className="left-arrow" onClick={() => {
          if (currentPageNumber < projectsData[props.selectedProjectIndex].caseStudy.highestPageIndex) {
            setCurrentPageNumber(currentPageNumber + 1);
          } else {
            setCurrentPageNumber(0);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
        <div className="case-study-challenge">
          <h2>Challenge</h2>
            <p>{projectsData[props.selectedProjectIndex].caseStudy.pages[currentPageNumber].challenge}</p>
        </div>
        <div className="case-study-solution">
          <h2>Solution</h2>
            <p>{projectsData[props.selectedProjectIndex].caseStudy.pages[currentPageNumber].solution}</p>
        </div>
        <p>{`${currentPageNumber + 1}/${projectsData[props.selectedProjectIndex].caseStudy.highestPageIndex + 1}`}</p>
        <a className="right-arrow" onClick={() => {
          if (currentPageNumber > 0) {
            setCurrentPageNumber(currentPageNumber - 1);
          } else {
            setCurrentPageNumber(projectsData[props.selectedProjectIndex].caseStudy.highestPageIndex);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
    </div>
  )
}

export default CaseStudySection;