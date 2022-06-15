import React from 'react';

const Hero = () => {
  return (
    <section className="Hero SmallerWidth">
      <div className="gradient">
        <div className="gradient-left">
          <h2>Hi! I'm Alex,</h2>
          <h2>a developer eager to produce quality work.</h2>
          <a className="cta" href="#Projects">Show Me!</a>
        </div>
        <div className="gradient-right">
          <img src="./images/character.svg" alt="developer character"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;