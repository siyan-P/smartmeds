import React from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./PatientList.module.css";
function PatientList() {
  return (
    <div>
      <br />
      <Card>
        <div>
          <h2 className={classes.h2}>Patient List</h2>
          <h3 className={classes.h3}>Medication Added Today</h3>
          <hr />
        </div>
        <div className={classes.components}>
          <h4>sample data</h4>
          <h4>sample data</h4>
          <h4>sample data</h4>
          <h4>sample data</h4>
        </div>
        <hr />
        <div className={classes.listMed}>
          <h5>View History Informations</h5>
          <button className={classes.button}>History</button>
        </div>
      </Card>
    </div>
  );
}

export default PatientList;
