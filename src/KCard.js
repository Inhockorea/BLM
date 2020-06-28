import React from 'react';
import PropTypes from 'prop-types';
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img4 from "./img/4.jpg"
import taegeuk from "./img/taegeuk.png"

const KCard = ({ property }) => {
  const { index } = property;


  if (index === 0) {
    return (
      <div id={`card-${index}`} className="message">
        <div>
          숨을 쉴 수 없다
        </div>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div id={`card-${index}`} className="message">
        <div>
          우리가 중대한 일에 대해 <strong>침묵</strong>하는 순간 우리의 삶은 <strong>종말</strong>을 고하기 시작한다.
        </div>
      </div>

    )
  }

  if (index === 2) {
    return (
      <div id={`card-${index}`} className="message">
        <div>
          결국, 우리는 <strong>적의 말</strong>보다 <strong>동지의 침묵</strong>을 기억할 것이다
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
        어디서 발생하든 <strong>불의</strong>는 세상 모든 곳의 <strong>정의</strong>를 위협한다
        <div className="mlk">
            - 마틴 루터 킹 주니어
        </div>

      </div>

    )
  }

  if (index === 7) {
    return (
      <div style={{ "display": "flex", "alignItems": 'center' }}>
        <div id={`card-${index}`} style={{ "zIndex": 1, "paddingTop": "60px" }} className="message kfinal" >
          한국도 같이 함께 하겠습니다.
        </div>
        <div id={`card-${index}`} style={{ "zIndex": 0 }} className="message">
          <img src={taegeuk} className ="taeguek" alt="img2"></img>
        </div>
      </div>

    )
  }

  if (index === 8) {
    return (
      <div id={`card-${index}`} className="message blmk">
        흑인의 생명은 소중합니다.
      </div>
    )
  }


}

KCard.propTypes = {
  property: PropTypes.object.isRequired
}

export default KCard;