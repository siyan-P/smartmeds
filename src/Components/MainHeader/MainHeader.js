import React, { Fragment } from "react";
import bannerImg from "../../assets/images/banner.jpg";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import styles from "./Navigation.module.css";
import Button from "../UI/Button/Button";
import {Routes,Route,useNavigate} from 'react-router-dom';
import Login from "../Login/Login";
const MainHeader = (props) => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    navigate('/login');
  };
  const navigateToSignUp = () => {
    navigate('/signup');
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>SmartMeds</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Button onClick={navigateToContacts}>Login</Button>
            </li>
            <li>
              <Button onClick={navigateToSignUp}>SignUp</Button>
            </li>
          </ul>
          </nav>
          
        
      </header>
  
    </Fragment>
  );
};

export default MainHeader;
