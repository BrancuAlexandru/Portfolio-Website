import { useState, useEffect, FC, useContext } from 'react';
import projectsData from '../../data/ProjectsData';
import { themeContext } from '../../index';

type caseStudyPropsTypes = {
  selectedProjectIndex: number;
}

type bubblePropsTypes = {
  id: number;
  currentPageNumber: number;
  selectedProjectIndex: number;
}

const CaseStudySection:FC<caseStudyPropsTypes> = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const highestPageIndex = projectsData[props.selectedProjectIndex].caseStudy.pages.length - 1;
  const currentPageData = projectsData[props.selectedProjectIndex].caseStudy.pages[currentPageNumber];
  return (
    <div className="project-menu-case-study-section">
      <div className="page-content">
        { projectsData[props.selectedProjectIndex].caseStudy.pages.length > 1 &&
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
        <div className="case-study-challenge">
          <h2>Challenge</h2>
            <p>{currentPageData.challenge}</p>
        </div>
        <div className="case-study-solution">
          <h2>Solution</h2>
            <p>{currentPageData.solution}</p>
        </div>
        <div className="case-study-learned">
          <h2>What I learned</h2>
            <p>{currentPageData.learned}</p>
        </div>
        { projectsData[props.selectedProjectIndex].caseStudy.pages.length > 1 &&
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
      </div>
      <div className="pagination-wrapper">
        <div className="page-number">
          {projectsData[props.selectedProjectIndex].caseStudy.pages.map((item, id) => {
            return (
              <Bubble key={id} id={id} currentPageNumber={currentPageNumber} selectedProjectIndex={props.selectedProjectIndex} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Bubble:FC<bubblePropsTypes> = (props) => {
  let theme = useContext(themeContext);
  const [activeColor, setActiveColor] = useState(theme === 'dark' ? '#a203f8' : '#039ef8');
  let defaultColor = "#a5a5a5";
  let id = props.id;
  useEffect(() => {
    if (theme === 'dark') {
      setActiveColor("#a203f8");
    } else {
      setActiveColor("#039ef8");
    }
  }, [theme])
  return (
    <div className="bubble-parent">
      {id === props.currentPageNumber && projectsData[props.selectedProjectIndex].caseStudy.pages.length > 1 &&
        <div className="case-study-bubble" id={props.id} style={{backgroundColor: activeColor, width: "9px", height: "9px"}}></div>
      }
      {id != props.currentPageNumber && projectsData[props.selectedProjectIndex].caseStudy.pages.length > 1 &&
        <div className="case-study-bubble" id={props.id} style={{backgroundColor: defaultColor}}></div>
      }
    </div>
  )
}

export default CaseStudySection;