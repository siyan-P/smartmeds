import React, { useState } from "react";
import banner from "../../Components/../assets/images/banner.jpg";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import axios from 'axios';
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [errorState, seterrorState] = useState("");
  const navigate = useNavigate();
  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const userLogin = (event) => {
    event.preventDefault();
    console.log(enteredUsername);
    console.log(enteredPassword);
    
      if (enteredUsername && enteredPassword !== "") {
        
        console.log('inside axios');
        axios.post("http://192.168.1.39:8000/Draccounts/loginDr/",{
          username:enteredUsername,
          password:enteredPassword
        },).then(function (response) {
          console.log('api response');
          console.log(response.data);
          if(response.status === 200){
            navigate("/home");
          }
        }).catch(function (error){
          console.log('inside catch fn');
          console.log(error);
          if(error.response.status === 400){
            seterrorState("Username or Password is incorrect!");

          }else{
            seterrorState("Error..! while trying to connect,please try again");
          }
        })
        
      } else {
        seterrorState("pls enter username and password!");
        console.log("error...pls enter data");
      }
    
  };

  return (
    <div>
      <div className={classes["main-image"]}>
        <img src={banner} alt="SmartMeds"></img>
      </div>
      <div className={classes.center}>
        <Card className={classes.login}>
          <h2 className={classes.h2}>Login</h2>
          <form onSubmit={userLogin}>
            <div className={classes.control}>
              <label htmlFor="user name">User Name</label>
              <input
                type="text"
                id="Username"
                
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="Password"
                
                value={enteredPassword}
                onChange={passwordChangeHandler}
              />
            </div>
            <p className={classes.errormessage}>{errorState}</p>
            <div className={classes.actions}>
              <Button type="submit" props={enteredUsername} >
                Login
              </Button>
            </div>
          </form>

          <h4>Does not have account? SignUp to Continue! </h4>
          <div className={classes.actions}>
            <Button type="submit" onClick={navigateToSignUp}>
              SignUp
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
