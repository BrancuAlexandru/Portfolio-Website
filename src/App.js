import "./style.scss"
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <div className="Footer"></div>
      </div>
    );
  }
}

export default App;