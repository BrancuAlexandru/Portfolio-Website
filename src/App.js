import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import BackToTopArrow from './components/BackToTopArrow';
import Credits from "./components/Credits";

const App = (props) => {
  const [theme, setTheme] = useState(props.theme);
  const [style, setStyle] = useState();
  const toggleTheme = () => {
    theme === 'lightTheme' ? setTheme('darkTheme') : setTheme('lightTheme');
  }
  useEffect(() => {
    if (theme === 'darkTheme') {
      setStyle('./src/darkTheme.scss');
    } else {
      setStyle('./src/lightTheme.scss');
    }
  }, [theme])
  return (
    <div className="App" theme={theme}>
      <link rel="stylesheet" href={style} />
      <Background theme={theme}/>
      <BackToTopArrow />
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Credits />
    </div>
  );
}

export default App;