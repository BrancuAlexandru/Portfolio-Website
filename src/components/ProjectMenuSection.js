import React, { useState, useEffect } from 'react';
import projectsData from './ProjectsData';

const ProjectMenuSection = (props) => {
  useEffect(() => {
    if (props.activeSection === 2) {
      return () => <CaseStudy id={props.id}/>
    } else if (props.activeSection === 1) {
      return () => <Technology id={props.id}/>
    } else {
      return () => <PhotosSection id={props.id}/>
    }
  }, [props.activeSection])
}
const CaseStudy = (props) => {
  return (
    <div className="project-menu-case-study-section">
      <a className="photos-section-left-arrow" onClick={() => {
          if (currentPageNumber > 1) {
            setCurrentPageNumber(currentPageNumber--);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
        <a className="photos-section-right-arrow" onClick={() => {
          if (currentPageNumber < projectsData[props.id].photos.totalNumberOfPages) {
            setCurrentPageNumber(currentPageNumber++);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
    </div>
  )
}
const Technology = (props) => {
  return (
    <div className="project-menu-technology-section">
      <p>{projectsData[props.id].technology.body}</p>
      {projectsData[props.id].technology.skills.map((skill) => {
        return (
          <h3>{skill}</h3>
        )
      })}
    </div>
  )
}
const PhotosSection = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  let currentPage = projectsData[props.id].photos[currentPageNumber];
  return (
    <div className="project-menu-photos-section">
      <div className="photos-section-image">
        <a className="photos-section-left-arrow" onClick={() => {
          if (currentPageNumber > 1) {
            setCurrentPageNumber(currentPageNumber--);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
        <a className="photos-section-right-arrow" onClick={() => {
          if (currentPageNumber < projectsData[props.id].photos.totalNumberOfPages) {
            setCurrentPageNumber(currentPageNumber++);
          }
          }}>
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
        <img src={currentPage.imageSrc}/>
        <p>{`${currentPageNumber}/${projectsData[props.id].photos.totalNumberOfPages}`}</p>
      </div>
      <div className="photos-section-text">
        <h2>{currentPage.title}</h2>
        <p>{currentPage.body}</p>
      </div>
    </div>
  )
}
export default ProjectMenuSection;