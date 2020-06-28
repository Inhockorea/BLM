import React from 'react';
import PropTypes from 'prop-types';
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import taegeuk from "./img/taegeuk.png"
import blm from "./img/blm.png"

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;


    if (index === 0) {
      return(
        <div id={`card-${index}`} className="message">
          <div>
            I can't breathe
          </div>
        </div>

      )
    }

    if (index === 1) {
      return(
        <div id={`card-${index}`} className="message">
          <div>
            <strong> Our lives </strong> begin to end the day
          </div>
          <div>
            we become <strong> silent </strong> about things that matter
          </div>
        </div>

      )
    }

    if (index === 2) {
      return(
        <div id={`card-${index}`} className="message">
          <div>
          In the end, we will remember not the words of our enemies,
          </div>
          <div>
            but the silence of our friends.
          </div>
        </div>
      )
    }

    if (index === 3) {
      return(
        <div id={`card-${index}`} className="message">
         <img src={img1} alt="img1"></img>
        </div>

      )
    }

    if (index === 4) {
      return(
        <div id={`card-${index}`} className="message">
         <img src={img2} alt="img2"></img>
        </div>

      )
    }

    if (index === 5) {
      return(
        <div id={`card-${index}`} className="message">
         <img src={img3} alt="img2"></img>
        </div>

      )
    }

    if (index === 6) {
      return(
        <div id={`card-${index}`} className="message">
         <img src={img4} alt="img2"></img>
        </div>

      )
    }

    if (index === 7) {
      return(
        <div id={`card-${index}`} className="message">
          injustice anywhere is a threat to justice everywhere
        </div>

      )
    }


    if (index === 8) {
      return(
        <div id={`card-${index}`} className="message">
    South Korea stands in solidarity with the Black Community.
        </div>

      )
    }

    if (index === 9) {
      return(
        <div id={`card-${index}`} className="message">
        <img src={taegeuk} alt="img2"></img>
       </div>

      )
    }

    if (index === 10) {
      return(
        <div id={`card-${index}`} className="message">
        <img src={blm} alt="img2"></img>
       </div>

      )
    }

    if (index === 11) {
      return(
        <div id={`card-${index}`} className="message">
        Black Lives Matter
       </div>

      )
    }





    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;