import React from 'react'
import Styles from './Square.module.css'

const Square = (props) => {
  console.log(props)
  let button_style = [Styles.Square]
  if (props.winnerSquare) {
    button_style.push(Styles.Active)
  }
  const rotate = {
    transform: `rotate(${props.rotate_type}deg)`,
    display: (props.rotate_type) ? 'block' : 'none'
  }
  return (
    <button className={button_style.join(' ')} onClick={props.click}>
      <span>{props.value}</span>
      <b className={Styles.line} style={rotate}></b>
    </button>
  )
}
export default Square