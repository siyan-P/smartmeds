import React, { useReducer, useState , useEffect, useContext} from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./AddMedication.module.css";
import axios from "axios";
import MedicationList from "../MedicationList/MedicationList";
import ScreenHome from "../ScreenHome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MedAdded,MedDetails,PatientId} from "../../Context";



const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};
function AddMedication(props) {
  const {medAdded , setMedAdded } = useContext(MedAdded);
  const {medupdateDetails, setMedDetails}= useContext(MedDetails);
  const [mornign, setMorning] = useState(false);
  const [noon, setNoon] = useState(false);
  const [evening, setEvening] = useState(false);
  const [medTime, setMedTime] = useState('after food')
  const [errorState, seterrorState] = useState("");
  //const [dataUpdated, setDataUpdated]  = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
 // const [pid, setpid] = useState('sample');

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

  const alertMsg = () => {
    console.log("inside alert message");
    toast.success('Medicine Added Successfully!',{
      position:toast.POSITION.TOP_CENTER
    });
  };
  const alertMsgWarning = (textMsg) => {
    console.log("inside warning msg");
    toast.warning(textMsg,{
      position:toast.POSITION.TOP_CENTER
    });
  };

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
    console.log(medTime);
    console.log(localStorage.getItem('Name'));
    console.log(localStorage.getItem('id'));
    console.log(mornign);
    console.log(noon);
    console.log(evening);
    if(formData.pname && formData.medName && formData.medEnd !== ''){

      console.log('success');
      axios.post("http://192.168.106.48:8000/medicine/medicineList/",
      { 
       description:formData.description,
       endDate:formData.medEnd,
       medName:formData.medName,
       p_id:formData.pname,
       medMorning:mornign,
       medNoon:noon,
       medEvening:evening,
       medicineTime:medTime,
       doc_name:localStorage.getItem('Name'),
       doc_id:localStorage.getItem('id'),
      }).then(function (response) {
        console.log(response.data);
        if(response.status === 201){
          seterrorState('');
          console.log('successfully added medicine');
          alertMsg();
          setMedAdded(true);
          // setDataUpdated(true);
          // onDataChange(dataUpdated);
          
        }
      }).catch(function (error) {
        console.log(error);
        if(error.response.status === 400){
          console.log('failed to add medication ');
          alertMsgWarning('Error adding medication!');
        }
      });
    }else{
      seterrorState("Unable to proceed!.Please fill the fields");
     // alertMsgWarning('Error adding medication!');
    }
  };
  //method for passing patient id to list medication component
  const getPatientId = () =>{
    console.log('inside getpatient', formData.pname); 
    props.pname(formData.pname);
    return <ScreenHome></ScreenHome>
  }
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
              
               onChange={handleChange}
               
              ></input>
            </div>

            <div className={classes.control}>
              <label>Select Medicine Name</label>
              <input
                type="text"
                name="medName"
               value={medupdateDetails ? medupdateDetails.medName:''}
                onChange={handleChange}
               
              ></input>
            </div>
            <div className={classes.control}>
              <label>Description About Medicine</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
             
              ></input>
            </div>
            <label>Select Medication Timing</label>
            <div className={classes.checkbox}>
              <input
                type="checkbox"
                name="morning"
                onChange={handleChange}
              
              />
              <label htmlFor="morning"> Morning</label>
              <input
                type="checkbox"
                name="noon"
                onChange={handleChange}
           
              />
              <label htmlFor="noon"> Noon</label>
              <input
                type="checkbox"
                name="evening"
                onChange={handleChange}
           
              />
              <label htmlFor="evening"> Evening</label>
            </div>
            <label>Shoud The Medicine Taken </label>
            <div className={classes.checkbox}>
              <input
                type="radio"
                id="afterFood"
                name="medTime"
            
              />
              <label htmlFor="afterFood">After Food</label>
              <input
                type="radio"
                id="beforeFood"
                name="medTime"
                onClick={()=>{setMedTime('beforeFood')}}
           
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
              
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="endingDate">Select Ending Date</label>
              <input
                type="date"
                id="endingDate"
                name="medEnd"
                onChange={handleChange}
            
              />
            </div>
            <p className={classes.errormessage}>{errorState}</p>
            <button className={classes.button} >Submit</button>
            
            
          </div>
        </form>
        <div className={classes.listMed}>
              <p className={classes.para}>View Listed Medication Details</p>
              <button className={classes.button} onClick={getPatientId}>Show List</button>
            </div>
            <br/>
      </Card>
    </div>
  );
}

export default AddMedication;
