import React from 'react';

const Navbar = (props) => {
  return (
    <section className="Navbar" id="Navbar">
      <h2 className="name">Brancu Alexandru</h2>
      <ThemeSwitch theme={props}/>
      <a className="projects-button cta" href="#Projects">PROJECTS</a>
      <a className="contact-button cta" href="#Contact">CONTACT</a>
    </section>
  );
}

const ThemeSwitch = (props) => {
  return (
    <div className="theme-switch">
      <a className="theme-switch-button"></a>
    </div>
  );
}

export default Navbar;