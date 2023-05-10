import React, { useState, useEffect } from "react";
import Card from "../../../Components/UI/Card/Card";
import classes from "./PatientList.module.css";
import axios from "axios";

function PatientCard({ user }) {
  return (
    <div className={classes.patientCard}>
      <p>
        Patient ID: {user.id} , mail: {user.p_email}
      </p>
      <p>Name: {user.p_name}</p>
      <hr />
    </div>
  );
}

function PatientList() {
  const [users, setPostUsers] = useState([]);
  const date = new Date().toISOString().slice(0, 10);
  console.log(date);

  useEffect(() => {
    axios
      .get(`http://192.168.1.39:8000/medicine/history/?date=${date}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("success response");
          console.log(response.data);
          const flattenedUsers = response.data.flatMap((userArr) => userArr);
          setPostUsers(flattenedUsers);
        }
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          console.log("inside er fun ,no data found");
          setPostUsers(null);
        }
      });
  }, []);

  return (
    <div>
      <br />
      <Card>
        <div>
          <h2 className={classes.h2}>Patient List</h2>
          <h3 className={classes.h3}>Medication Added Today</h3>
          <hr />
        </div>
        {users ? (
          <div className={classes.components}>
            {users.map((user, index) => (
              <PatientCard key={index} user={user} />
            ))}
          </div>
        ) : (
          <div className={classes.errorMsg}>
            <p>No Patient Listed Today!</p>
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

export default PatientList;
