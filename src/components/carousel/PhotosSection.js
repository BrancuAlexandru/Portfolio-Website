import React, { useState, useEffect } from 'react';
import projectsData from '../../data/ProjectsData';

const PhotosSection = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const highestPageIndex = projectsData[props.selectedProjectIndex].photos.pages.length - 1;
  const currentPageData = projectsData[props.selectedProjectIndex].photos.pages[currentPageNumber];
  return (
    <div className="project-menu-photos-section">
      <div className="page-content">
        <div className="photos-section-image">
          { projectsData[props.selectedProjectIndex].photos.pages.length > 1 &&
            <a className="left-arrow" onClick={() => {
              if (currentPageNumber > 0) {
                setCurrentPageNumber(currentPageNumber - 1);
              } else {
                setCurrentPageNumber(highestPageIndex);
              }
            }}>
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
                <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
              </svg>
            </a>
          }
          { projectsData[props.selectedProjectIndex].photos.pages.length > 1 &&
            <a className="right-arrow" onClick={() => {
              if (currentPageNumber < highestPageIndex) {
                setCurrentPageNumber(currentPageNumber + 1);
              } else {
                setCurrentPageNumber(0);
              }
            }}>
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
                <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
              </svg>
            </a>
          }
          <img src={currentPageData.imageSrc} loading="lazy"/>
        </div>
        <div className="photos-section-text">
          <h2>{currentPageData.title}</h2>
          <p className="body-text">{currentPageData.body}</p>
          <p className="made-in-text">{currentPageData.madeIn}</p>
        </div>
        <div className="page-number">
          { projectsData[props.selectedProjectIndex].photos.pages.length > 1 &&
          projectsData[props.selectedProjectIndex].photos.pages.map((item, id) => {
            return (
              <Bubble key={id} id={id} currentPageNumber={currentPageNumber} theme={props.theme}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Bubble = (props) => {
  const [activeColor, setActiveColor] = useState(props.theme === 'dark' ? '#a203f8' : '#039ef8');
  let defaultColor = "#a5a5a5";
  let id = props.id;
  useEffect(() => {
    if (props.theme === 'dark') {
      setActiveColor("#a203f8");
    } else {
      setActiveColor("#039ef8");
    }
  }, [props.theme])
  return (
    <div className="bubble-parent">
      {id === props.currentPageNumber && 
        <div className="photos-bubble" id={props.id} style={{backgroundColor: activeColor, width: "9px", height: "9px"}}></div>
      }
      {id != props.currentPageNumber && 
        <div className="photos-bubble" id={props.id} style={{backgroundColor: defaultColor}}></div>
      }
    </div>
  )
}

export default PhotosSection;