import React from 'react';
import classes from '../../Components/Login/Login.module.css';
import Card from '../../Components/UI/Card/Card';
import Button from '../../Components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import banner from '../../assets/images/banner.jpg'
function SignUp() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  };
  const navigateToHome = () =>{
    navigate('/home');
  }

    console.log('sign up page initialized')
    return (
      <div>
         <div className={classes['main-image']}>
        <img src={banner} alt='SmartMeds'></img>
    </div>
        <div className={classes.center}>
          <Card className={classes.login}>
            <h2 className={classes.h2}>SignUp Here!</h2>
            <form>
              <div  className={classes.control
             
            }>
                <label htmlFor="user name">User Name</label>
                <input
                  type="email"
                  id="email"
                  //value={"enteredEmail"}
                  // onChange={"emailChangeHandler"}
                  // onBlur={"validateEmailHandler"}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="user name">User Email</label>
                <input
                  type="email"
                  id="email"
                  //value={"enteredEmail"}
                  // onChange={"emailChangeHandler"}
                  // onBlur={"validateEmailHandler"}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="user name">Dr.Licence ID</label>
                <input
                  type="email"
                  id="email"
                  //value={"enteredEmail"}
                  // onChange={"emailChangeHandler"}
                  // onBlur={"validateEmailHandler"}
                />
              </div>
              <div className={classes.control}>
              
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  // value={"enteredPassword"}
                  // onChange={"passwordChangeHandler"}
                  // onBlur={"validatePasswordHandler"}
                />
              </div>
              <div className={classes.control}>
              
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="password"
                // value={"enteredPassword"}
                // onChange={"passwordChangeHandler"}
                // onBlur={"validatePasswordHandler"}
              />
            </div>
              <div className={classes.actions}>
                <Button
                  type="submit"
                  className={classes.btn} onClick={navigateToHome}
                  
                >
                  Register
                </Button>
              </div>
            </form>
            <h4>Have Account? Login to Continue </h4>
            <div className={classes.actions}>
              <Button type="submit" className={classes.btn} onClick={navigateToLogin}>
                {" "}
                Login
              </Button>
            </div>
          </Card>
        </div>
        </div>
      );
}

export default SignUp
