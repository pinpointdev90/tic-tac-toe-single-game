import React, { Component } from 'react';
import Square from '../Square/Square';
import styles from './board.module.css'

export default class Board extends Component {
  render() {
    return (
      <div className={styles.Box_warapper}>
        <div className={styles.Box_row}>
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[0]} value={this.props.squares[0]} click={() => this.props.click(0)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[1]} value={this.props.squares[1]} click={() => this.props.click(1)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[2]} value={this.props.squares[2]} click={() => this.props.click(2)} />
        </div>
        <div className={styles.Box_row}>
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[3]} value={this.props.squares[3]} click={() => this.props.click(3)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[4]} value={this.props.squares[4]} click={() => this.props.click(4)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[5]} value={this.props.squares[5]} click={() => this.props.click(5)} />
        </div>
        <div className={styles.Box_row}>
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[6]} value={this.props.squares[6]} click={() => this.props.click(6)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[7]} value={this.props.squares[7]} click={() => this.props.click(7)} />
          <Square rotate_type={this.props.rotate_type} winnerSquare={this.props.winning_block[8]} value={this.props.squares[8]} click={() => this.props.click(8)} />
        </div>
      </div>
    )
  }
}