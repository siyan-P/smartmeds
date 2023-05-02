import React from "react";
import cardImg from "../../../assets/images/card_dec.jpg";
import Card from "../../../Components/UI/Card/Card";
import classes from "./CardDescription.module.css"
function CardDescription(props) {
  return (
    <Card>
    <div className={classes.cardContents}>
      <div>
        <h3 className={classes.h3}>{props.title}</h3>
      </div>
      <div className={classes.centerImg}>
        <img src={cardImg} alt="description images" className={classes.img}></img>
      </div>
      <p className={classes.para}>
        The system provides real-time medication information and reminders,
        making it easier to manage medication and reducing the risk of health
        complications.
      </p>
    </div>
    </Card>
  );
}

export default CardDescription;
