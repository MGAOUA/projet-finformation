import { hslToRgb, style } from "@mui/system";
import React from "react";
import { BsListNested } from "react-icons/bs";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { useRef } from "react";
import { Route, Router } from "react-router";
import "./style.css";

import Highway from '@dogstudio/highway';

const Navbar = (props) => {
  const btn = useRef("");

  const style = {
    lien: {
      textDecoration: "none",
      listStyle: "none",
      textAlign: "none",
      padding: "0.25em 1.25em",
      fontSize: "1.5rem",
      fontWidh: "bold",
      color: "white",
    },
    lienHover: {
      textDecoration: "none",
      fontFamily: "fangsong",
      fontStyle: "italic",
      fontSise: "2rem",
      color: "hsl(323,21% ,16%)",
      //color: "hsl(317,100% ,54%)",
      border: "currentColor 1px solid ",
      padding: "0.25em 1.25em",
      borderRadius: "0.25em",
      textShadow: "0 0 1.25em currentColor",
      boxShadow: "inset 0 0 0.5em 0 currentColor, 0 0 0.5em 0 currentColor",
    },
    list: {},
    elementUl: {
      listStyle: "none",
      textDecoration: "none",
      display: "flex",
      alignContent: "center",
    },
  };
  const AfficherMenu = () => {
    btn.current.classList.remove("");
    console.log("menu appeleé");
    return <Menu restaurant={props.restaurant}></Menu>;
  };
 

  const getRestaurantActuel = () => {};
  return (
    <div className="navComplet">
      <img src="images/logo.svg" alt="logo spécifique" />
      <ul style={style.elementUl}>
        <li>
          <Link to="#main" style={style.lien}>
            Home
          </Link>
        </li>

        <li>
          <Link to="#menu" style={style.lien}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="#reserver" style={style.lien}>
            Reserver
          </Link>
        </li>
        <li>
          <Link to="#contact" style={style.lien}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
