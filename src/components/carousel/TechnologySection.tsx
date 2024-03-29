import { FC } from 'react';
import projectsData from '../../data/ProjectsData';

type selectedProjectIndexTypes = {
  selectedProjectIndex: number;
}

const TechnologySection:FC<selectedProjectIndexTypes> = (props) => {
  return (
    <div className="project-menu-technology-section">
      <div className="technology-wrapper">
        <div className="technology-top">
          <p>{projectsData[props.selectedProjectIndex].technology.body}</p>
        </div>
        <div className="technology-bottom">
          <div className="skills-wrapper">
            {projectsData[props.selectedProjectIndex].technology.skills.map((skill:string, id:number) => {
              return (
                <h3 key={id} className="technology-skill">{skill}</h3>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologySection;