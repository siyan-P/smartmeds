import { Fragment } from "react";
import React from "react";
import classes from "./Header.module.css";
import Button from "../../../Components/UI/Button/Button";
function Header() {
  return (
    <header className={classes.header}>
      <h3 className={classes.h1}>SmartMeds</h3>
      <nav>
        <ul>
          <li>
            <button className={classes.button}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
