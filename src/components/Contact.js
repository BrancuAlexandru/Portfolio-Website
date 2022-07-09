import React from 'react';

const Contact = (props) => {
  return (
    <section className="Contact" id="Contact">
      <h1 className="section-title">Contact</h1>
      <div className="contact-content">
        <div className="form">
          <input type="text" className="text-input name-input" placeholder="Name/Nickname"/>
          <textarea className="text-input body-input" placeholder="Type here.."/>
          <button className="cta" id="submit-button">Submit</button>
        </div>
        <div className="links">
          <a className="github-link cta" id="GitHub-button" href="https://github.com/BrancuAlexandru" target="_blank">
            <div className="link-image">
              <GitHubIcon iconColor={props.theme.iconColor}/>
            </div>
            <h2>GitHub</h2>
          </a>
          <a className="resume-link cta" id="resume-button" href="./misc/brancuAlexandruResume.pdf" download>
            <div className="link-image">
              <ResumeIcon iconColor={props.theme.iconColor}/>
            </div>
            <h2>Resume</h2>
          </a>
          <a className="linkedin-link cta" id="LinkedIn-button" href="https://www.linkedin.com/in/alexandru-brancu-a9088a184/" target="_blank">
            <div className="link-image">
              <LinkedInIcon iconColor={props.theme.iconColor}/>
            </div>
            <h2>LinkedIn</h2>
          </a>
        </div>
      </div>
    </section>
  );
}

const GitHubIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 30 30" fill={props.iconColor}>
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
    </svg>

  )
}
const ResumeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 125">
      <g>
        <path d="M27.74,33.96l2.43,7.14l1.22-4.23l-0.6-0.65c-0.27-0.39-0.33-0.74-0.18-1.03c0.32-0.64,0.99-0.52,1.62-0.52 c0.66,0,1.47-0.12,1.67,0.7c0.07,0.27-0.02,0.56-0.21,0.86l-0.6,0.65l1.22,4.23l2.2-7.14c1.59,1.43,6.28,1.71,8.02,2.69 c0.55,0.31,1.05,0.7,1.45,1.23c1.24,1.64,1.24,1.93,1.45,3.98c-0.09,0.94-0.62,1.49-1.68,1.57H18.49 c-1.05-0.08-1.59-0.62-1.68-1.57c0.21-2.05,0.21-2.35,1.45-3.98c0.4-0.53,0.9-0.92,1.45-1.23C21.46,35.67,26.15,35.38,27.74,33.96 L27.74,33.96L27.74,33.96z M70.47,24.86c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h16.68c1.09,0,1.98,0.89,1.98,2 c0,1.1-0.88,2-1.98,2H70.47L70.47,24.86z M1.18,122.01C0.49,121.69,0,121,0,120.18V2c0-1.1,0.89-2,2-2H21.4h79.72c1.1,0,2,0.89,2,2 v107.73c0,0.11-0.01,0.21-0.02,0.31c-0.28,3.93-1.56,6.99-3.86,9.18c-2.3,2.18-5.53,3.4-9.72,3.64c-0.09,0.01-0.17,0.02-0.26,0.02 H2.83C2.15,122.88,1.54,122.53,1.18,122.01L1.18,122.01z M99.13,109.68V3.99H21.4H3.99v114.9h85.26l0.04,0 c3.21-0.18,5.61-1.04,7.2-2.55C98.06,114.85,98.93,112.62,99.13,109.68L99.13,109.68z M16.82,90.07c-1.09,0-1.98-0.89-1.98-2 c0-1.1,0.88-2,1.98-2h70.5c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2H16.82L16.82,90.07z M17.14,73.77c-1.09,0-1.98-0.89-1.98-2 s0.88-2,1.98-2h70c1.09,0,1.98,0.89,1.98,2s-0.88,2-1.98,2H17.14L17.14,73.77z M16.82,57.46c-1.09,0-1.98-0.89-1.98-2 s0.88-2,1.98-2h30.13c1.09,0,1.98,0.89,1.98,2s-0.88,2-1.98,2H16.82L16.82,57.46z M54.64,57.46c-1.09,0-1.98-0.89-1.98-2 s0.88-2,1.98-2h32.5c1.09,0,1.98,0.89,1.98,2s-0.88,2-1.98,2H54.64L54.64,57.46z M57.91,41.16c-1.09,0-1.98-0.89-1.98-2 c0-1.1,0.88-2,1.98-2h29.23c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2H57.91L57.91,41.16z M70.47,106.37 c-1.09,0-1.98-0.89-1.98-2c0-1.1,0.88-2,1.98-2h16.68c1.09,0,1.98,0.89,1.98,2c0,1.1-0.88,2-1.98,2H70.47L70.47,106.37z M26.44,23.71c0.23,0.09,0.47,0.11,0.72,0.06l-0.34-2.74c0.18-0.68,0.45-1.2,0.81-1.59c0.37-0.4,0.85-0.65,1.41-0.76 c0.74-0.05,0.97,0.49,1.71,0.96c2.26,1.44,4.17,1.93,6.96,1.97l-0.45,2.29c0.12,0.01,0.24,0.01,0.36-0.01 c0.03,0.01,0.07,0.01,0.1,0.01c0.51-0.05,0.83,0.01,0.92,0.2c0.12,0.24,0.02,0.7-0.3,1.45l-1.53,2.52 c-0.57,0.94-1.15,1.88-1.89,2.57c-0.71,0.67-1.59,1.11-2.79,1.11c-1.11,0-1.95-0.43-2.64-1.06c-0.71-0.65-1.29-1.54-1.83-2.41 l-1.36-2.16l0,0l-0.01-0.01c-0.42-0.63-0.64-1.18-0.66-1.6c0-0.15,0.02-0.28,0.07-0.39c0.05-0.1,0.12-0.18,0.21-0.25 C26.05,23.79,26.22,23.73,26.44,23.71L26.44,23.71L26.44,23.71z M38.63,23.32l0.09-3.58c-0.1-1.43-0.57-2.51-1.33-3.32 c-1.85-2-5.3-2.51-7.91-1.57c-0.44,0.16-0.85,0.36-1.23,0.6c-1.08,0.69-1.94,1.68-2.29,2.92c-0.08,0.29-0.14,0.59-0.17,0.88 c-0.06,1.25-0.02,2.75,0.07,3.93c-0.11,0.04-0.21,0.1-0.3,0.16c-0.2,0.14-0.35,0.31-0.45,0.52c-0.09,0.2-0.14,0.43-0.13,0.68 c0.02,0.54,0.27,1.21,0.76,1.94l1.36,2.16c0.57,0.9,1.17,1.83,1.95,2.54c0.8,0.73,1.78,1.23,3.08,1.23c1.39,0,2.41-0.51,3.24-1.29 c0.8-0.75,1.4-1.73,2-2.71l1.55-2.55c0.01-0.01,0.01-0.03,0.02-0.04h0c0.41-0.94,0.51-1.59,0.29-2.02 C39.1,23.57,38.91,23.4,38.63,23.32L38.63,23.32L38.63,23.32z"></path>
      </g>
    </svg>
  )
}
const LinkedInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 3333 3333" fillRule="evenodd" clipRule="evenodd">
      <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm-215 1336h342v175h5c48-86 164-175 338-175 361 0 428 225 428 517v596h-357v-528c0-126-3-288-186-288-186 0-214 137-214 279v537h-357V1336zm-247-309c0 102-83 186-186 186-102 0-186-83-186-186 0-102 83-186 186-186 102 0 186 83 186 186zm-371 309h371v1113H834V1336z"></path>
    </svg>
  )
}

export default Contact;