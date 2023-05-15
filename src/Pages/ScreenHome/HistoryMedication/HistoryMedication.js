import Table from "react-bootstrap/Table";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import classes from "./HistoryMedication.module.css";
import NavScrollExample from "../../../Components/Nav/NavBar";


const HistoryList = ({ medlist }) => {
  const StartDate = `${medlist.startDate}`;
  const formattedStart = moment(StartDate).format("YYYY-MM-DD");
  const EndDate = `${medlist.endDate}`;
  const formattedEnd = moment(EndDate).format("YYYY-MM-DD");
  return (
    <tr>
      <td>{medlist.id}</td>
      <td>{medlist.medName}</td>
      <td>{medlist.description}</td>
      <td>{formattedStart}</td>
      <td>{formattedEnd}</td>
      <td>
        {medlist.doc_name} - {medlist.doc_id}
      </td>
    </tr>
  );
};
function HistoryMedication(props) {
  const [data, setData] = useState([]);
  const [pid, setpid] = useState();

  //function to call medication list api
  useEffect(() => {
    setpid(props.pname);
    console.log('patient id in history', pid);
    console.log('medication in his',props.pname);
    console.log("inside useeffect ");
    axios
      .get(`http://192.168.1.39:8000/medicine/HistoryView/?p_id=3`)
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
          // setErrorMsg(error.response.data);
          setData(null);
        }
      });
  }, []);
  return (
    <div>
       <NavScrollExample/> 
    <div className={classes.mainCard}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine Name</th>
            <th>Description </th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Doctor Name & ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((medlist, index) => (
            <HistoryList key={index} medlist={medlist} />
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
}

export default HistoryMedication;
