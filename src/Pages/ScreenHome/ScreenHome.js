import React from "react";
import Header from "./Header/Header";
import PatientList from "./PatientList/PatientList";
import DrProfile from "./DrProfileInfo.js/DrProfile";
import AddMedication from "./AddMedication/AddMedication";
import classes from './ScreenHome.module.css';

function ScreenHome() {
  return (
    <div className={classes.maincard}>
      <Header></Header>
      <br/>
      <DrProfile></DrProfile>
      <br/>
      <div className={classes.cards}>
      
      <AddMedication/>
      <PatientList></PatientList>
      </div>
    </div>
  )
}

export default ScreenHome
