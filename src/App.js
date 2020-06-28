import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import data from './data';
import { CSSTransition } from "react-transition-group";

function App() {
  const [appearHome, setappearHome] = useState(true);
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


  return (
    <div className="App">
      <div>
        <CSSTransition
          in={appearHome}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home property={property} />
        </CSSTransition>
      </div>

      <button  className="prev" onClick={prevProperty} disabled={property.index === 0}> &#8592; </button>
      <button  className="next" onClick={nextProperty} disabled={property.index === data.properties.length - 1}> &#8594; </button>
    </div>
  );
}

export default App;