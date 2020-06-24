import React from "react";

import Header from "../../UI/Common/Header";

import Styles from "./Home.module.css";
import exit from "../../../assets/logout-icon.png";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <React.Fragment>
      <Header />
      <div className={Styles.action_btn_wrapper}>
        <button className={Styles.action_btns} onClick={props.click}>
          New Game
        </button>
        <Link to="/Credits" className={Styles.action_btns}>
          Credit
        </Link>
        <a href="https://www.opencart.com/" className={Styles.action_btns}>
          Exit <img src={exit} alt="Exit" style={{ width: "12px" }} />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Home;
