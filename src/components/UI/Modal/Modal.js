import React, { Component } from 'react'

import style from './Modal.module.css'

class modal extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className={this.props.show ? style.Backdrop : ''} ></div> */}
        <div
          className={style.Modal}
          style={
            {
              transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? '1' : '0'
            }
          }
        >
          {this.props.children}
        </div>
      </React.Fragment >
    )
  }
}

export default modal