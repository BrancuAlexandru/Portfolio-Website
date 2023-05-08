import React, { useState, FC } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import BackToTopArrow from './components/BackToTopArrow';
import Credits from "./components/Credits";
import './style.scss';

type themePropType = {
  theme: string;
}

const App:FC<themePropType> = (props) => {
  const [theme, setTheme] = useState(props.theme);
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <div className={theme} theme={theme}>
      <div className="App">
        <Background theme={theme}/>
        <BackToTopArrow />
        <Navbar theme={theme} toggleTheme={toggleTheme}/>
        <Hero theme={theme}/>
        <About />
        <Projects theme={theme}/>
        <Contact />
        <Credits />
      </div>
    </div>
  );
}

export default App;