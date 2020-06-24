import React from "react";

import WinnerImage from "../../../assets/victory-icon.png";

import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const Winner_content = props => {
  return (
    <React.Fragment>
      <h1 className={styles.Winner_title}>Victory to Player {props.player}!</h1>
      <img src={WinnerImage} alt="Winner" className={styles.Winner_img} />
      <div style={{ marginTop: "20px" }}>
        <button className={styles.Action_btn} onClick={props.restart}>
          Restart
        </button>
        <Link to="/home" className={styles.Action_btn} onClick={props.quit}>
          Quit
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Winner_content;
