import React from 'react'

import Styles from './Header.module.css'
import logo from '../../../assets/logo.png'

const Header = (props) => {
  return (
    <div className={Styles.Header}>
      <img src={logo} alt="Logo" className={Styles.logo} />
    </div>
  )
}
export default Header