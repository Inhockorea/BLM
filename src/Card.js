import React from 'react';
import PropTypes from 'prop-types';
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img4 from "./img/4.jpg"
import taegeuk from "./img/taegeuk.png"

const Card = ({ property }) => {
  const { index } = property;


  if (index === 0) {
    return (
      <div id={`card-${index}`} className="message">
        <div>
          <strong>
            I can't breathe
          </strong>
        </div>
      </div>

    )
  }

  if (index === 1) {
    return (
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
    return (
      <div id={`card-${index}`} className="message">
        <div>
        In the end,
        </div>
        <div>
          we will remember not the <strong>words of our enemies</strong>,
        </div>
        <div>
          but the <strong>silence of our friends</strong>.
          </div>
      </div>
    )
  }

  if (index === 3) {
    return (
      <div id={`card-${index}`} className="image">
        <img src={img1} alt="img1"></img>
      </div>

    )
  }

  if (index === 4) {
    return (
      <div id={`card-${index}`} className="image">
        <img src={img2} alt="img2"></img>
      </div>

    )
  }

  if (index === 5) {
    return (
      <div id={`card-${index}`} className="image">
        <img src={img4} alt="img2"></img>
      </div>

    )
  }

  if (index === 6) {
    return (
        <div id={`card-${index}`} className="message">
          <strong>Injustice</strong> anywhere is a threat to <strong>justice</strong> everywhere
          <div className="mlk">
            - Martin Luther King Jr
          </div>
        </div>
    )
  }

  if (index === 7) {
    return (
      <div style={{ "display": "flex", "alignItems": 'center' }}>
        <div id={`card-${index}`} style={{ "zIndex": 1, "paddingTop": "60px" }} className="message" >
          <strong>South Korea</strong> stands in <strong>solidarity</strong> with the <strong>Black Community</strong>.

        </div>
        <div id={`card-${index}`} style={{ "zIndex": 0 }} className="message">
          <img src={taegeuk} className="taeguek" alt="img2"></img>
        </div>
      </div>

    )
  }

  if (index === 8) {
    return (
      <div id={`card-${index}`} className="message blm">
        Black Lives Matter
      </div>
    )
  }

}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card;