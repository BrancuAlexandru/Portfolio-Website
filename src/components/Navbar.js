import React from 'react';

const Navbar = () => {
  return (
    <section className="Navbar">
      <h2 className="name">Brancu Alexandru</h2>
      <a className="cta" id="projects-button" href="#Projects">PROJECTS</a>
      <a className="cta" id="contact-button" href="#Contact">CONTACT</a>
    </section>
  );
}

export default Navbar;