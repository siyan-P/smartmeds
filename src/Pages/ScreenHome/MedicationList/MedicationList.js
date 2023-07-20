import React, { useState, useEffect ,useContext} from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "../PatientList/PatientList.module.css";
import styles from "./MedicationList.module.css";
import moment from "moment/moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseSquare, AiOutlineEdit } from "react-icons/ai";
import HistoryMedication from "../HistoryMedication/HistoryMedication";
import { MedAdded,PatientId,MedDetails } from "../../Context";

function MedicineListCard({ medlist, onDelete, onUpdate}) {
  
  const StartDate = `${medlist.startDate}`;
  const formattedStart = moment(StartDate).format("YYYY-MM-DD");
  const EndDate = `${medlist.endDate}`;
  const formattedEnd = moment(EndDate).format("YYYY-MM-DD");
  return (
    <div className={styles.card}>
      <div className={styles.iconDiv}>
        <span>
          Medicine Name:{" "}
          <span className={styles.medName}>{medlist.medName}</span>
        </span>
        <span>
          <AiOutlineEdit className={styles.edit} onClick={() => onUpdate(medlist)}/>
          <AiOutlineCloseSquare className={styles.delete} onClick={() => onDelete(medlist.id)}/>
        </span>
      </div>
      <p>
        Description: {medlist.description} ,Schedule: {medlist.medicineTime}
      </p>
      <p>
        Date: {formattedStart} to {formattedEnd}
      </p>
    </div>
  );
}


function MedicationList(pname) {
  //navigating to history page
  const navigate = useNavigate();
  const navigateToHistory = () => {
    // const url = `/history?pname=${encodeURIComponent(pname)}`;
    navigate("/history");
    //<HistoryMedication pname= {pname}/>
  };
  // const navigateToHistory = () => {
  //   navigate(`/history/${pname}`);
  // };
  const {medAdded , setMedAdded} = useContext(MedAdded);
  const {medupdateDetails, setMedDetails}= useContext(MedDetails);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([]);
  const [medDelete, setMedDelete] = useState(false);
  const {patientId, setPatientID} = useContext(PatientId);
  
  const date = new Date().toISOString().slice(0, 10);
  const deleteMed = (id) => {
    console.log("delete med clicked",id);
    axios.delete(`http://192.168.106.48:8000/medicine/deleteMed/${id}/`).then((response) =>{
      console.log('response data',response.data);
      if(response.status === 200){
        setMedDelete(true);
      }
    }).catch((error) =>{
      console.log('error data,',error);
    });
  };
  //update medicine information
  const updateMed = (id) => {
    setMedDetails(id);
    console.log("updated  med clicked",id);
    axios.delete(`http://192.168.106.:8000/medicine/medicineUpdate/${id.id}/`).then((response) =>{
      console.log('response data',response.data);
      if(response.status === 200){
        setMedDelete(true);
      }
    }).catch((error) =>{
      console.log('error data,',error);
    });
  };

  console.log("passed value", pname);
  useEffect(() => {
    console.log("inside useeffect selecetd name", pname);
    axios
      .get(
        `http://192.168.106.48:8000/medicine/selectedMedicines/?p_id=${pname.pname}&date=${date}`
      )
      .then(function (response) {
        console.log("api response", response.data);
        if (response.status === 200) {
          console.log("success to retrive data");
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.log("inside catch funv");
        if (error.response.status === 404) {
          console.log(error.response.data);
          setErrorMsg(error.response.data);
          setData(null);
        }
      });
      setMedAdded(false);
      setPatientID(pname.pname);
  }, [pname,medAdded,medDelete]);
  console.log("medication list ", pname);

  return (
    <div style={{zIndex:"9999"}}>
      <br />
      <Card>
        <div>
          <h4 className={classes.h4}>Medication Details</h4>
          <p className={classes.para}>
             Medication List of  Selected Patient
          </p>
          <hr />
        </div>
        {data ? (
          <div className={classes.components}>
            {data.map((medlist, index) => (
              <MedicineListCard key={index} medlist={medlist} onDelete={deleteMed} onUpdate={updateMed} />
            ))}
          </div>
        ) : (
          <div className={classes.errorMsg}>
            <p>No Medicine Listed Today! for this patient</p>
          </div>
        )}

        <hr />

        <div className={classes.listMed}>
          <p className={classes.para}>View History Informations</p>
          {patientId ? (<button className={styles.button} onClick={navigateToHistory}>
            History
          </button>):<p>Select Patient for view History</p>}
        </div>
      </Card>
    </div>
  );
}

export default MedicationList;
