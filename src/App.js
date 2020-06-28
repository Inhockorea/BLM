import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import data from './data';
import { CSSTransition } from "react-transition-group";

function App() {
  const [korean, setKorean] = useState(false);
  const [property, setProperties] = useState(data.properties[0]);

  let newIndex;

  const nextProperty = () => {
    newIndex = property.index + 1
    setProperties(data.properties[newIndex]);
  }

  const prevProperty = () => {
    newIndex = property.index - 1;
    setProperties(data.properties[newIndex]);
  }
  
  const toggleLanguage = () => {
    setKorean(!korean);
  }

  return (
    <div className="App">
      <div className="toggleContainer">

        <div className="ENG">ENG</div>

        <div className="toggle">
          <label className="switch">
            <input type="checkbox" onClick={toggleLanguage} />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="KR">KR</div>

      </div>


      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={property} korean={korean} />
        </CSSTransition>
      </div>


      <button className="prev" onClick={prevProperty} disabled={property.index === 0}> &#8592; </button>
      <button className="next" onClick={nextProperty} disabled={property.index === data.properties.length - 1}> &#8594; </button>

    </div>
  );
}

export default App;