import React from 'react';

const Navbar = (props) => {
  return (
    <section className="Navbar" id="Navbar">
      <h2 className="name">Brancu Alexandru</h2>
      <ThemeSwitch theme={props} toggleTheme={props.toggleTheme}/>
      <a className="projects-button cta" href="#Projects">PROJECTS</a>
      <a className="contact-button cta" href="#Contact">CONTACT</a>
    </section>
  );
}

const ThemeSwitch = (props) => {
  return (
    <div className="theme-switch" onClick={() => props.toggleTheme()}>
      <a className="theme-switch-button">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" viewBox="0 0 50 50">
          <path fill="#fff" d="
          M46.369,28.793c-11.852,5.935-26.271,1.138-32.206-10.714
          c-2.748-5.488-3.191-11.524-1.702-17.016
          C1.197,7.236-3.255,21.263,2.544,32.844C8.479,44.696,22.898,49.493,34.75,43.558
          c6.364-3.187,10.69-8.821,12.417-15.19
          "/>
        </svg>
      </a>
    </div>
  );
}

export default Navbar;