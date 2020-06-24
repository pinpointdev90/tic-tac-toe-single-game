import React, { Component } from 'react'

import HomeUi from '../../components/UI/Home/Home'
import NewGame from '../../components/UI/Modal/New_game'
import Modal from '../../components/UI/Modal/Modal'

class Home extends Component {
  state = {
    show: 0,
    error: 0,
    players: ["", ""]
  }
  showFieldHandler = () => {
    this.setState({
      show: !this.state.show
    })
  }
  nameHandler = (event) => {
    let player_id = event.target.getAttribute('data-player')
    let value = event.target.value
    let players = [...this.state.players]
    players[player_id] = value;
    this.setState({ players: players })
  }
  start_game = () => {
    let queryParams = []
    this.setState({
      error: 0
    })
    for (let i in this.state.players) {
      if (!this.state.players[i]) {
        this.setState({
          error: 1
        })
        return ' '
      }
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.players[i]))
    }
    const querySting = queryParams.join('&')

    this.props.history.push({
      pathname: '/game',
      search: '?' + querySting
    })
  }
  closeErrorHandler = () => {
    this.setState({
      error: 0
    })
  }
  render() {
    return (
      <React.Fragment>
        <HomeUi click={this.showFieldHandler} />
        <Modal show={this.state.show}>
          <NewGame players={this.state.players} click={this.start_game} change={(event) => this.nameHandler(event)} />
        </Modal>
        <Modal show={this.state.error}>
          <div style={{ color: "#ffffff" }} onClick={this.closeErrorHandler}>
            <small style={{ float: "right", cursor: "pointer" }}>X</small>
            <h1>Please Fill player name </h1>
          </div>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Home