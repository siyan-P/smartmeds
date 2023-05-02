import React from "react";
import Card from "../../../Components/UI/Card/Card";
import profileimg from "../../../assets/images/profile.png";
import classes from "./DrProfile.module.css";
function DrProfile() {
  return (
    <div>
      <div className={classes.card}>
        
        <div class={classes['card-image']}>
          <img src={profileimg} alt="Profile image" />
        </div>
        <div className={classes['card-details']}>
        <p>Welcome onboard!</p>
        <br/>
          <h2>Dr.John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Phone: +1 123-456-7890</p>
          
        </div>
      </div>
    </div>
  );
}

export default DrProfile;
