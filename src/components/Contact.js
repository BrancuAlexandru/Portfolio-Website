import React from 'react';

const Contact = () => {
  return (
    <div className="Contact Container">
      <h1 className="section-title">Contact</h1>
      <div className="form">
        <input type="text" placeholder="Name/Nickname"/>
        <input type="text" placeholder="Type here.."/>
        <button>Submit</button>
      </div>
      <div className="links">
        <a className="github-link" href="https://github.com/BrancuAlexandru" target="_blank">
          <img src="./images/github.png" className="link-image" alt="github icon"/>
          <h2>GitHub</h2>
        </a>
        <a className="resume-link" href="./misc/brancuAlexandruResume.pdf" download>
          <img src="./images/resume.png" className="link-image" alt="resume icon"/>
          <h2>Resume</h2>
        </a>
        <a className="linkedin-link" href="https://www.linkedin.com/in/alexandru-brancu-a9088a184/" target="_blank">
          <img src="./images/linkedin.png" className="link-image" alt="linkedin icon"/>
          <h2>LinkedIn</h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;