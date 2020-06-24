import React from 'react'


import styles from './Modal.module.css'

const Winner_content = (props) => {
  return (
    <React.Fragment>
      <h1 className={styles.Winner_title}>Start a New Game</h1>
      <div style={{ marginTop: '20px' }}>
        <div className={styles.from_group}>Player 1&nbsp;&nbsp;
        <input type="text" placeholder="Player Name" className={styles.from_input}
            value={props.players[0]}
            onChange={props.change}
            data-player="0" />
          <br></br></div>
        <div className={styles.from_group}>Player 2&nbsp;&nbsp;
          <input type="text" placeholder="Player Name" className={styles.from_input}
            value={props.players[1]}
            onChange={props.change}
            data-player="1" /></div>
        <br></br>
        <button className="btn-default" onClick={props.click}>Start !</button>
      </div>
    </React.Fragment >
  )
}

export default Winner_content