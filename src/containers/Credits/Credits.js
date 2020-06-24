import React, { Component } from 'react'


import Header from '../../components/UI/Common/Header'
import { Link } from 'react-router-dom'

class Credits extends Component {
  render() {
    const credit_warpper = {
      display: "flex",
      margin: "auto",
      width: "300px",
      height: "300px",
      background: "#383838",
      marginBottom: "20px"
    }
    return (
      <React.Fragment>
        <Header />
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "#ffffff" }}>Credit</h3>
          <div style={credit_warpper}>
            <ul style={{ width: "100%", color: "#fff", listStyle: "none" }}>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
              <li>Ankit</li>
            </ul>
          </div>
          <Link to="/" className="btn-default">Back</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Credits