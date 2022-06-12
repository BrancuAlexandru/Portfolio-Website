import React from 'react';

const Hero = () => {
  return (
    <div className="Hero Container">
      <div className="gradient">
        <div className="gradient-left">
          <h2>Hi! I'm Alex,</h2>
          <h2>a developer eager to produce high quality work.</h2>
          <button>Show Me!</button>
        </div>
        <div className="gradient-right">
          <img src="./images/character.svg" alt="developer character"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;