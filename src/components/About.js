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
          <div className="skill-icons">
            <div className="skill-icon sass-icon" alt="sass icon"></div>
            <div className="skill-icon react-icon" alt="react icon"></div>
            <div className="skill-icon git-icon" alt="git icon"></div>
            <div className="skill-icon firebase-icon" alt="firebase icon"></div>
            <div className="skill-icon webpack-icon" alt="webpack icon"></div>
            <div className="skill-icon javascript-icon" alt="javascript icon"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;