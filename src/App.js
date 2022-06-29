import "./style.scss"
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import background from '../public/images/background.svg';

class App extends React.Component {
  render(){
    return(
      <div className="App" style={{backgroundImage: 'url(./images/background.svg)'}}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;