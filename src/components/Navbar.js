import React from 'react';

const Navbar = () => {
  return (
    <section className="Navbar">
      <h2 className="name">Brancu Alexandru</h2>
      <div className="theme-switch">
        <a className="theme-switch-button"></a>
      </div>
      <a className="projects-button cta" href="#Projects">PROJECTS</a>
      <a className="contact-button cta" href="#Contact">CONTACT</a>
    </section>
  );
}

export default Navbar;