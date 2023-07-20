import React, { useState, useReducer } from "react";
import classes from "../../Components/Login/Login.module.css";
import Card from "../../Components/UI/Card/Card";
import Button from "../../Components/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/images/banner.jpg";
import axios from "axios";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};
function SignUp() {
  const [errorState, seterrorState] = useState("");
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/");
  };
  const registration = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(formData.email);
    console.log(formData.username);
    console.log(formData.licenceid);
    if (
      formData.email &&
      formData.password.trim() &&
      formData.password2.trim() &&
      formData.username &&
      formData.licenseid !== "" &&
      formData.password.trim() === formData.password2.trim()
    ) {
      console.log("successs");
      console.log("inside axios");
      axios
        .post("http://192.168.106.48:8000/Draccounts/registerDr/", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          licenseid: formData.licenceid,
        })
        .then(function (response) {
          console.log("api response");
          console.log(response.data);
          if (response.status === 200) {
            navigate("/home");
          }
        })
        .catch(function (error) {
          console.log("inside catch fn");
          console.log(error);
          if (error.response.status === 400) {
            console.log(error.response.data["error"]);
            seterrorState(error.response.data["error"]);
          } else {
            seterrorState("Error..! while trying to connect,please try again");
          }
        });
    } else {
      console.log("error while inputing data");
      seterrorState("Unable to proceed!.Please fill the fields");
    }
  };

  return (
    <div>
      <div className={classes["main-image"]}>
        <img src={banner} alt="SmartMeds"></img>
      </div>
      <div className={classes.center}>
        <Card className={classes.login}>
          <h2 className={classes.h2}>SignUp Here!</h2>
          <form onSubmit={registration}>
            <div className={classes.control}>
              <label htmlFor="user name">User Name</label>
              <input
                type="username"
                name="username"
                placeholder="Octavia"
                //value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="user email">User Email</label>
              <input
                type="email"
                name="email"
                placeholder="smartMeds@gmail.com"
                //value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="licence no">Dr.Licence ID</label>
              <input
                type="licenceid"
                name="licenceid"
                placeholder="GN58P"
                //value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                //value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password2"
                name="password2"
                // value={formData.password2}
                onChange={handleChange}
              />
            </div>
            <div className={classes.actions}>
              <p className={classes.errormessage}>{errorState}</p>
              <Button type="submit" className={classes.btn}>
                Register
              </Button>
            </div>
          </form>
          <p className={classes.para}>Have Account? Login to Continue </p>
          <div className={classes.actions}>
            <Button
              type="submit"
              className={classes.btn}
              onClick={navigateToLogin}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
