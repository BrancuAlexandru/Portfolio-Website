import React from 'react';

const About = () => {
  return (
    <section className="About Container">
      <h1 className="section-title">About Me</h1>
      <div className="about-me-content">
        <div className="about-me-text">
          <div className="about-me-paragraph">
            <p>I want to make useful products and amazing services that can help people globally.</p>
            <p>The software and web industries touch the lives of everyone, which is why it's my career.</p>
          </div>
        </div>
        <div className="about-me-skills">
          <div className="skill-images">
            <img src="./images/html.png" alt="html icon"/>
            <img src="./images/css.png" alt="css icon"/>
            <img src="./images/javascript.png" alt="javascript icon"/>
            <img src="./images/sass.png" alt="sass icon"/>
            <img src="./images/react.png" alt="react icon"/>
            <img src="./images/git.png" alt="git icon"/>
            <img src="./images/npm.png" alt="npm icon"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;