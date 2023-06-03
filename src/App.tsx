import { FC, useContext } from "react";
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
  const theme = useContext(themeContext);
  return (
    <div className={theme} theme={theme}>
      <div className="App">
        <Background />
        <BackToTopArrow />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Credits />
      </div>
    </div>
  );
}

export default App;