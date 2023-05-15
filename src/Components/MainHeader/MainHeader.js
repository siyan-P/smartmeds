import React, { Fragment } from "react";
import classes from "./MainHeader.module.css";
import Button from "../UI/Button/Button";
import {Routes,Route,useNavigate} from 'react-router-dom';

const MainHeader = () => {
  // const navigate = useNavigate();

  // const navigateToContacts = () => {
  //   navigate('/login');
  // };
  // const navigateToSignUp = () => {
  //   navigate('/signup');
  // };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.h1}>SmartMeds</h1>
        <nav>
          <ul>
            <li>
              <Button>Login</Button>
            </li>
            <li>
              <Button>SignUp</Button>
            </li>
          </ul>
          </nav>
          
        
      </header>
  
    </Fragment>
  );
};

export default MainHeader;
