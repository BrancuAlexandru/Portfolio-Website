import { FC, useContext } from 'react';
import { themeContext } from '../index';

type toggleThemeFunctionType = {
  toggleTheme: Function;
}

const Navbar:FC<toggleThemeFunctionType> = (props) => {
  return (
    <section className="Navbar" id="Navbar">
      <h2 className="name">Brancu Alexandru</h2>
      <ThemeSwitch toggleTheme={props.toggleTheme}/>
      <a className="projects-button cta" href="#Projects">PROJECTS</a>
      <a className="contact-button cta" href="#Contact">CONTACT</a>
    </section>
  );
}

const ThemeSwitch:FC<toggleThemeFunctionType> = (props) => {
  const theme = useContext(themeContext);
  return (
    <div className="theme-switch" onClick={() => props.toggleTheme()}>
      <div className="theme-switch-button">
        {theme === 'dark' &&
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none">
            <g stroke-width="0"/>
            <g stroke-linecap="round" stroke-linejoin="round"/>
            <g><path d="M21.5287 15.9294C21.3687 15.6594 20.9187 15.2394 19.7987 15.4394C19.1787 15.5494 18.5487 15.5994 17.9187 15.5694C15.5887 15.4694 13.4787 14.3994 12.0087 12.7494C10.7087 11.2994 9.90873 9.40938 9.89873 7.36938C9.89873 6.22938 10.1187 5.12938 10.5687 4.08938C11.0087 3.07938 10.6987 2.54938 10.4787 2.32938C10.2487 2.09938 9.70873 1.77938 8.64873 2.21938C4.55873 3.93938 2.02873 8.03938 2.32873 12.4294C2.62873 16.5594 5.52873 20.0894 9.36873 21.4194C10.2887 21.7394 11.2587 21.9294 12.2587 21.9694C12.4187 21.9794 12.5787 21.9894 12.7387 21.9894C16.0887 21.9894 19.2287 20.4094 21.2087 17.7194C21.8787 16.7894 21.6987 16.1994 21.5287 15.9294Z" fill="#a203f8"/></g>
          </svg>
        }
        {theme === 'light' &&
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none">
            <g stroke-width="0"/>
            <g stroke-linecap="round" stroke-linejoin="round"/>
            <g><g><path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#f0cd35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></g>
          </svg>
        }
      </div>
    </div>
  );
}

export default Navbar;