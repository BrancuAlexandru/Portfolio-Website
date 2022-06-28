import React from 'react';

const About = () => {
  return (
    <section className="About">
      <h1 className="section-title">About Me</h1>
      <div className="about-me-content">
        <div className="about-me-text">
          <div className="about-me-paragraph">
            <p>I want to make useful products and amazing services that can help people globally.</p>
            <p>The software and web industries touch the lives of everyone, which is why it's my choice as a career.</p>
          </div>
        </div>
        <div className="about-me-skills">
          <div className="skill-images">
            <img src="./images/icons/sass.png" className="cta" alt="sass icon"/>
            <img src="./images/icons/react.png" className="cta" alt="react icon"/>
            <img src="./images/icons/git.png" className="cta" alt="git icon"/>
            <img src="./images/icons/html.png" className="cta" alt="html icon"/>
            <img src="./images/icons/css.png" className="cta" alt="css icon"/>
            <img src="./images/icons/javascript.png" className="cta" alt="javascript icon"/>
            <img src="./images/icons/npm.png" className="cta" alt="npm icon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;