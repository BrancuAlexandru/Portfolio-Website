import React from 'react';

const Contact = () => {
  return (
    <section className="Contact" id="Contact">
      <h1 className="section-title">Contact</h1>
      <div className="contact-content">
        <div className="form">
          <input type="text" className="textInput nameInput" placeholder="Name/Nickname"/>
          <textarea className="textInput bodyInput" placeholder="Type here.."/>
          <button className="cta">Submit</button>
        </div>
        <div className="links">
          <a className="github-link cta" href="https://github.com/BrancuAlexandru" target="_blank">
            <img src="./images/github.png" className="link-image" alt="github icon"/>
            <h2>GitHub</h2>
          </a>
          <a className="resume-link cta" href="./misc/brancuAlexandruResume.pdf" download>
            <img src="./images/resume.png" className="link-image" alt="resume icon"/>
            <h2>Resume</h2>
          </a>
          <a className="linkedin-link cta" href="https://www.linkedin.com/in/alexandru-brancu-a9088a184/" target="_blank">
            <img src="./images/linkedin.png" className="link-image" alt="linkedin icon"/>
            <h2>LinkedIn</h2>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;