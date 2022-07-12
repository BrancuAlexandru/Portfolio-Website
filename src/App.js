import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

const App = (props) => {
  if (props.theme === 'lightTheme') {
    import('./lightTheme.scss');
  } else {
    import('./darkTheme.scss');
  }
  return (
    <div className="App" theme={props.theme}>
      <Background theme={props}/>
      <BackToTopArrow />
      <Navbar theme={props.theme}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

// When scroll is below a value, render an arrow to go back to top
const BackToTopArrow = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  document.addEventListener('scroll', () => {
    setScrollPosition(window.scrollY);
  });
  useEffect(() => {
    if (scrollPosition > 1) {
      return;
    } else {
      return () => {
        <a className="backToTopArrow" id="backToTopArrow" href="#Navbar">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 380 380">
            <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"/>
          </svg>
        </a>
      }
    }
  }, [scrollPosition]);
}

export default App;