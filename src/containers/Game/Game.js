import React, { Component } from 'react'
import Board from '../../components/Board/board'
import Modal from '../../components/UI/Modal/Modal'
import WinnerContent from '../../components/UI/Modal/Winner_content'

//assets
import styles from './Game.module.css'
import GameLogo from '../../assets/logo.png'

class Game extends Component {
  state = {
    turn_changer: true,
    squares: Array(9).fill(),
    players: ["", ""]
  }

  handleClick(i) {
    const squares = this.state.squares
    const winner = checkWinner(squares)
    if (winner || squares[i]) {
      return ''
    }
    squares[i] = (this.state.turn_changer) ? 'O' : 'X'
    this.setState({
      squares: squares,
      turn_changer: !this.state.turn_changer
    })
  }

  restartHandler = () => {
    this.setState({
      turn_changer: true,
      squares: Array(9).fill()
    })
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search)
    const players = []
    for (let param of query.entries()) {
      players.push(param[1])
    }
    this.setState({
      players: players
    })
  }

  quitHandler() {

  }

  render() {
    const winner = checkWinner(this.state.squares)
    const winning_block = Array(9).fill(null)
    let deg = null
    let player_name = ''
    if (winner) {
      winning_block[winner.block.a] = 1
      winning_block[winner.block.b] = 1
      winning_block[winner.block.c] = 1
      deg = winner.deg
      if (winner.winner === 'O') {
        player_name = this.state.players[0]
      } else {
        player_name = this.state.players[1]
      }
    }

    return (
      <div className={styles.game_wrapper}>
        <div className={styles.game_Header}>
          <img src={GameLogo} alt="Logo" className={styles.game_logo} />
          <div className={styles.Player_details}>
            <div>Player 1 <input type="text" placeholder="Player Name" value={this.state.players[0]} readOnly /></div>
            <div>Player 2 <input type="text" placeholder="Player Name" value={this.state.players[1]} readOnly /></div>
          </div>
        </div>
        <div className={styles.game_board}>
          <Board click={(i) => this.handleClick(i)}
            squares={this.state.squares} winning_block={winning_block} rotate_type={deg} />
        </div>
        <Modal show={winner}>
          <WinnerContent player={player_name} restart={this.restartHandler} quit={this.quitHandler} />
        </Modal>
      </div>
    )
  }
}

function checkWinner(squares) {
  const lines = [
    [0, 1, 2, '0'],
    [3, 4, 5, '0'],
    [6, 7, 8, '0'],
    [0, 3, 6, '90'],
    [1, 4, 7, '90'],
    [2, 5, 8, '90'],
    [0, 4, 8, '45'],
    [2, 4, 6, '45']
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return {
        winner: squares[a],
        block: {
          'a': a,
          'b': b,
          'c': c
        },
        deg: d
      }
    }
  }

  return null;
}

export default Game