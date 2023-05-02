import React, { useState } from "react";
import banner from '../../Components/../assets/images/banner.jpg';
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate('/signup');
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(enteredPassword.trim().length > 3);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(event.target.value.trim().length > 3);
  };

  const validateEmailHandler = () => {
    setEmailIsValid();
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("LoggedIn", "1");
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <div>
       <div className={classes['main-image']}>
        <img src={banner} alt='SmartMeds'></img>
    </div>
    <div className={classes.center}>
      <Card className={classes.login}>
        <h2 className={classes.h2}>Login</h2>
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="user name">User Name</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ""
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              disabled={!formIsValid}
            >
              Login
            </Button>
          </div>
        </form>
        <h4>Does not have account? SignUp to Continue! </h4>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={navigateToSignUp}>
            {" "}
            SignUp
          </Button>
        </div>
      </Card>
    </div>
    </div>
  );
};

export default Login;
