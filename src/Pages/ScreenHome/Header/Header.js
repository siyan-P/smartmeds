import { Fragment } from "react";
import React from "react";
import classes from "./Header.module.css";
import Button from "../../../Components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <h3 className={classes.h1}>SmartMeds</h3>
      <nav>
        <ul>
          <li>
            <button className={classes.button} onClick={navigateToSignUp}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
