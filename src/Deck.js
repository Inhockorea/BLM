import React, { useState, useEffect } from 'react'
import { CSSTranstion, TransitionGroup,  } from 'react-transition-group  '
import './styles.css'

const slides = [
  { id: 0, text: 'Our lives begin to end the day, we become silent about things that matter.', duration: "3s" },
  { id: 1, text: '', duration: "1s" },
  { id: 2, text: 'In the End, we will remember not the words of our enemies, but the silence of our friends.', duration: "3s"},
  { id: 3, text: '', duration: "3s"},
  { id: 4, url: 'photo-1551989137-b8ad7595d020?ixlib=rb-1.2.1&w=3300&q=80' },
  { id: 5, url: 'photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80' },
]

function Deck() {
  // const [index, setIndex] = useState(0)
  // const transitions = useTransition(slides[index], item => item.id, {
  //   from: { opacity: 0, transform: 'scale(1.1)' },
  //   enter:  { opacity: 1, transform: 'scale(1)' },
  //   leave: { opacity: 0, transform: 'scale(0.9)' },
  // })

  // useEffect(() => void setInterval(() => setIndex(index => (index + 1) % 5), 5000), [])

  // const transition = transitions.map(({ item, props, key }) => (

  //     item.text 
  //     ? <animated.div key={key} className="text" style={{ ...props, "transition-duration":item.duration}}> {item.text} </animated.div>
  //     : <animated.div
  //       key={key}
  //       className="bg"
  //       style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
  //     />

  // ))

  // return (
  //   <div className="container">
  //     {transition}
  //   </div>
  // )
}

export default Deck  
