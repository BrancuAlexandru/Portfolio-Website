import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import BackToTopArrow from './components/BackToTopArrow';
import Credits from "./components/Credits";

const App = (props) => {
  if (props.theme === 'lightTheme') {
    import('./lightTheme.scss');
  } else {
    import('./darkTheme.scss');
  }
  return (
    <div className="App" theme={props.theme}>
      <Background theme={props.theme}/>
      <BackToTopArrow />
      <Navbar theme={props.theme}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Credits />
    </div>
  );
}

export default App;