import React from "react";
import Navbar from "../Navbar/Navbar";
import { Router, useHistory, Route, Switch } from "react-router";
import { style } from "@mui/system";
import Restaurant from "../Restaurants/Restaurant";

const Onerestaurant = (props) => {
  const history = useHistory();
  const style = {
    restoPresentation: {
      display: "flex",
      width: "100%",
      margin: "5em",
      padding: "5em",
      color: "#adb5bd",
    },
    restodescription: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      width: "50%",
      color: "#adb5bd",
    },

    imagesDiv: {
      display: "flex",
      margin: "0em 3em 0 0",
      width: "50vh",
      height: "50vh",
    },
  };
  return (
    <div
      style={style.restoPresentation}
      onClick={() =>
        //changer la color du la div
        //use react dom
        //une transition

        history.push(`/restaurants/${props.restaurantInfo.identifiant}`)
      }
    >
      <div style={style.restodescription}>
        <h2>{props.restaurantInfo.name}</h2>
        <h4>{props.restaurantInfo.description}</h4>
        <h6>
          {props.restaurantInfo.adresse.detail}
          {props.restaurantInfo.adresse.commune}
          {props.restaurantInfo.adresse.ville}
        </h6>
      </div>
      <div style={style.imagesDiv}>
        <img
          style={style.imagesDiv}
          src={props.restaurantInfo.dossierImage}
        ></img>
        {/* {<Casseroul photos={e?.photos}></Casseroul>} */}
      </div>
    </div>
  );
};

export default Onerestaurant;
