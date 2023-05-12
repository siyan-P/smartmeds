import React, { useState, useEffect } from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "../PatientList/PatientList.module.css";
import styles from "./MedicationList.module.css";
import moment from "moment/moment";
import axios from "axios";
import { AiOutlineCloseSquare, AiOutlineEdit } from "react-icons/ai";
function MedicineListCard({ medlist }) {
  const StartDate = `${medlist.startDate}`;
  const formattedStart = moment(StartDate).format("YYYY-MM-DD");
  const EndDate = `${medlist.endDate}`;
  const formattedEnd = moment(EndDate).format("YYYY-MM-DD");
  return (
    <div className={styles.card}>
      <div className={styles.iconDiv}>
        <span>Medicine Name: <span className={styles.medName} >{medlist.medName}</span></span>
        <span>
          <AiOutlineEdit className={styles.edit} />
          <AiOutlineCloseSquare className={styles.delete} onClick={deleteMed} />
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
const deleteMed = () =>{
  console.log('delete med clicked');
}

function MedicationList(pname) {
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState([]);
  const date = new Date().toISOString().slice(0, 10);
  console.log("passed value", pname);
  useEffect(() => {
    console.log("inside useeffect selecetd name", pname);
    axios
      .get(
        `http://192.168.1.39:8000/medicine/selectedMedicines/?p_id=${pname.pname}&date=${date}`
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
  }, [pname]);
  console.log("medication list ", pname);

  return (
    <div>
      <br />
      <Card>
        <div>
          <h2 className={classes.h2}>Medication Details</h2>
          <h5 className={classes.h3}>
            Medication List of Currently Selected Patient
          </h5>
          <hr />
        </div>
        {data ? (
          <div className={classes.components}>
            {data.map((medlist, index) => (
              <MedicineListCard key={index} medlist={medlist} />
            ))}
          </div>
        ) : (
          <div className={classes.errorMsg}>
            <p>No Medicine Listed Today! for this patient</p>
          </div>
        )}

        <hr />

        <div className={classes.listMed}>
          <h5>View History Informations</h5>
          <button className={classes.button}>History</button>
        </div>
      </Card>
    </div>
  );
}

export default MedicationList;
