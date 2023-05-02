import React from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./AddMedication.module.css";
function AddMedication() {
  return (
    <div>
      <br />
      <Card>
        <div>
          <h2 className={classes.h2}>Add medication</h2>
          <hr />
        </div>
        <div className={classes.components}>
          <div className={classes.control}>
            <label>Select Patient ID & Name</label>
            <input type="text" id="pname"></input>
          </div>

          <div className={classes.control}>
            <label>Select Medicine Name</label>
            <input type="text" id="medName"></input>
          </div>
          <div className={classes.control}>
            <label>Description About Medicine</label>
            <input type="text" id="description"></input>
          </div>
          <label>Select Medication Timing</label>
          <div className={classes.checkbox}>
            <input
              type="checkbox"
              id="morning"
              name="morning"
              value="morning"
            />
            <label for="morning"> Morning</label>
            <input type="checkbox" id="noon" name="noon" value="noon" />
            <label for="noon"> Noon</label>
            <input
              type="checkbox"
              id="evening"
              name="evening"
              value="evening"
            />
            <label for="evening"> Evening</label>
          </div>
          <label>Shoud The Medicine Taken </label>
          <div className={classes.checkbox}>
            <input type="radio" id="afterFood" name="medTime" value="checked" />
            <label for="afterFood">After Food</label>
            <input
              type="radio"
              id="beforeFood"
              name="medTime"
              value="beforeFood"
            />
            <label for="beforeFood">Before Food</label>
          </div>
          <div className={classes.control}>
          <label for="startingDate">Select Starting Date</label>
  <input type="date" id="startingDate" name="medStarting"/>
          </div>
          <div className={classes.control}>
          <label for="endingDate">Select Ending Date</label>
  <input type="date" id="endingDate" name="medEnd"/>
          </div>
          
          <button className={classes.button}>Submit</button>
          <div className={classes.listMed}>
          <h5>View Already Listed Medication Details</h5>
          <button className={classes.button}>Show List</button>
          </div>
          
        </div>
      </Card>
    </div>
  );
}

export default AddMedication;
