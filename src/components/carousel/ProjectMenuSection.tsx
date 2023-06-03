import { FC } from 'react';
import PhotosSection from './PhotosSection';
import TechnologySection from './TechnologySection';
import CaseStudySection from './CaseStudySection';

type sectionValueAndPropsTypes = {
  activeSection: number;
  selectedProjectIndex: number;
}

const ProjectMenuSection:FC<sectionValueAndPropsTypes> = (props) => {
  return (
    <div>
      {props.activeSection === 2 &&
        <CaseStudySection selectedProjectIndex={props.selectedProjectIndex} />
      }
      {props.activeSection === 1 &&
        <TechnologySection selectedProjectIndex={props.selectedProjectIndex}/>
      }
      {props.activeSection === 0 &&
        <PhotosSection selectedProjectIndex={props.selectedProjectIndex} />
      }
    </div>
  )
}

export default ProjectMenuSection;