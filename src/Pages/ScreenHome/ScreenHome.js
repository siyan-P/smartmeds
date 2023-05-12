import React, { useState } from "react";
import Header from "./Header/Header";
import PatientList from "./PatientList/PatientList";
import DrProfile from "./DrProfileInfo.js/DrProfile";
import AddMedication from "./AddMedication/AddMedication";
import classes from './ScreenHome.module.css';
import MedicationList from "./MedicationList/MedicationList";

function ScreenHome() {
  const [pname,setPname] = useState(0);
  const onSuccess= (data) => {
    setPname(data);
  }
  return (
    <div className={classes.maincard}>
      <Header></Header>
      <br/>
      <DrProfile></DrProfile>
      <br/>
      <div className={classes.cards}>
      <PatientList></PatientList>
      <AddMedication pname={onSuccess}/>
      {/* <div><p>{pname}</p></div> */}
      <MedicationList pname={pname}/>
      
      </div>
    </div>
  )
}

export default ScreenHome
