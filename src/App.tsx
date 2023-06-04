import { FC, useContext, useState } from "react";
import { themeContext } from "./index";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import BackToTopArrow from './components/BackToTopArrow';
import Credits from "./components/Credits";
import './style.scss';

const App:FC = () => {
  const initialTheme = useContext(themeContext);
  const [theme, setTheme] = useState(initialTheme);
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  return (
    <themeContext.Provider value={theme}>
      <div className={`${theme} App`} theme={theme}>
        <Background />
        <BackToTopArrow />
        <Navbar toggleTheme={toggleTheme}/>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Credits />
      </div>
    </themeContext.Provider>
  );
}

export default App;