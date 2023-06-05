import { useState } from 'react';

const Credits = () => {
  const [creditsIsOpen, setCreditsIsOpen] = useState(false);
  const creditsList = [
    ['BGJar', 'https://bgjar.com', '- For the background'],
    ['SVG Repo', 'https://www.svgrepo.com', '- For icons'],
    ['Icons8', 'https://icons8.com', '- For icons']
  ]// if credits === open then render open if not render closed; this should be a stateful var
  return (
    <div className="Credits">
      {creditsIsOpen && 
        <div className="open">
          <div className="credits-left-side" onClick={() => setCreditsIsOpen(false)}></div>
          <div className="credits-wrapper">
            <h2>Special thanks to:</h2>
            {creditsList.map((item, id) => {
              return (
                <div className="credit-element" key={id}>
                  <h3>{item[0]}</h3>
                  <a target="_blank" href={item[1]}>{item[1]}</a>
                  <p>{item[2]}</p>
                </div>
              )
            })}
          </div>
          <div className="credits-right-side" onClick={() => setCreditsIsOpen(false)}></div>
        </div>
      }
      {!creditsIsOpen && 
        <div className="closed">
          <button className="credits-button cta" onClick={() => setCreditsIsOpen(true)}>Credits</button>
        </div>
      }
    </div>
  )
}

export default Credits;