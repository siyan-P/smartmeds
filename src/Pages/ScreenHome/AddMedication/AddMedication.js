import React, { useReducer, useState , useEffect} from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./AddMedication.module.css";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};
function AddMedication() {
  const [mornign, setMorning] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [medTime, setMedTime] = useState('after food')
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  useEffect(() => {
    if(formData.morning === 'on'){
      setMorning(true);
    } else {
      setMorning(false);
    }
    if(formData.noon === 'on'){
      setNoon(true);
    } else {
      setNoon(false);
    }
    if (formData.evening === 'on'){
      setEvening(true);
    } else {
      setEvening(false);
    }
  }, [formData]);

  const addMedication = (e) => {
    e.preventDefault();
     console.log("inside add medication");
     console.log(formData);
    console.log(formData.medName);
    console.log(formData.description);
    console.log(formData.medStarting);
    console.log(formData.medEnd);
    console.log(formData.morning);
    console.log(formData.noon);
    console.log(formData.evening);
    console.log(formData.pname);
    
    //console.log(selected);
    console.log(medTime);
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem('id'));
    if(formData.pname && formData.medName && formData.description && formData.medEnd !== ''){

      console.log('success');

    }
    console.log(mornign);
    console.log(noon);
    console.log(evening);
    formData.medName='';

    //clear the input values
   // dispatch({ type: "RESET" });
  };
  return (
    <div>
      <br />
      <Card>
        <div>
          <h2 className={classes.h2}>Add medication</h2>
          <hr />
        </div>
        <form onSubmit={addMedication}>
          <div className={classes.components}>
            <div className={classes.control}>
              <label>Select Patient ID & Name</label>
              <input
                type="text"
                name="pname"
                //value={state.pname}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
               //}
               onChange={handleChange}
              ></input>
            </div>

            <div className={classes.control}>
              <label>Select Medicine Name</label>
              <input
                type="text"
                name="medName"
               // value={state.medName}
                onChange={handleChange}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              ></input>
            </div>
            <div className={classes.control}>
              <label>Description About Medicine</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
               // value={state.description}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              ></input>
            </div>
            <label>Select Medication Timing</label>
            <div className={classes.checkbox}>
              <input
                type="checkbox"
                name="morning"
                onChange={handleChange}
                // value={state.morning}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
              <label htmlFor="morning"> Morning</label>
              <input
                type="checkbox"
                name="noon"
                onChange={handleChange}
                // value={state.noon}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
              <label htmlFor="noon"> Noon</label>
              <input
                type="checkbox"
                name="evening"
                onChange={handleChange}
                // value={state.evening}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
              <label htmlFor="evening"> Evening</label>
            </div>
            <label>Shoud The Medicine Taken </label>
            <div className={classes.checkbox}>
              <input
                type="radio"
                id="afterFood"
                name="medTime"
                //onChange={handleChange}
                // value={state.afterFood}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
              <label htmlFor="afterFood">After Food</label>
              <input
                type="radio"
                id="beforeFood"
                name="medTime"
                onClick={()=>{setMedTime('beforeFood')}}
               // value={state.beforeFood}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
              <label htmlFor="beforeFood">Before Food</label>
            </div>
            <div className={classes.control}>
              <label htmlfor="startingDate">Select Starting Date</label>
              <input
                type="date"
                id="startingDate"
                name="medStarting"
                onChange={handleChange}
                //value={state.medStarting}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="endingDate">Select Ending Date</label>
              <input
                type="date"
                id="endingDate"
                name="medEnd"
                onChange={handleChange}
                // value={state.medEnd}
                // onChange={(e) =>
                //   dispatch({
                //     type: "INPUT_CHANGE",
                //     name: e.target.name,
                //     value: e.target.value,
                //   })
                // }
              />
            </div>

            <button className={classes.button}>Submit</button>
            <div className={classes.listMed}>
              <h5>View Already Listed Medication Details</h5>
              <button className={classes.button}>Show List</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddMedication;
