import { Fragment } from 'react'
import React from 'react'
import classes from './Header.module.css'
import Button from '../../../Components/UI/Button/Button'
function Header() {
  return (
    <Fragment>
    <header className={classes.header}>
      <h1 className={classes.h1}>SmartMeds</h1>
      <nav>
        <ul>
          <li>
            <button className={classes.button}>Logout</button>
          </li>
        </ul>
        </nav>
        
      
    </header>

  </Fragment>
  )
}

export default Header
