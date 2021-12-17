import React from "react";
import style from "./style.css";
import img1 from "../../ressources/photos/Times/img1.jpg";
import Restaurant from "../Restaurants/Restaurant";
import Onerestaurant from "../Onerestaurant/Onerestaurant";
import { Link, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Casseroul from "../Casseroul/Casseroul";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import action from "../../action/Listrestaurants";
import Search from "../Search/Search";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonCheckFill } from "react-icons/bs";
import axios from "axios";
import logoR from "../../ressources/logo.PNG";
import bootstrap from "bootstrap";
import background from "../../../src/background.jpg";
import { Form, Dropdown, Button, ButtonGroup } from "react-bootstrap";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ref = useRef();
  const RedirectConnect = (e) => {
    history.push(e);
  };
  const [RestoDiv, setRestoDiv] = useState([]);
  const [load, setLoad] = useState(true);
  const [Error, setError] = useState(false);
  const [textRechercher, setTextRechercher] = useState("name");
  const Listrestaurants = useSelector((state) => state.listResto);
  console.log(Listrestaurants);
  useEffect(() => {
    const getDataFromBdd = async () => {
      try {
        const Listrestaurants = await axios.get(
          "http://localhost:5000/restaurants"
        );

        if (Listrestaurants.request.status == 200)
          dispatch(action.GetListInitial(Listrestaurants.data.data));
        else console.log(Listrestaurants.request.status);
        setLoad(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoad(false);
      }
    };
    getDataFromBdd();
    // setRestoDiv(Listrestaurants);
  }, []);
  /************************** */
  /********** declaration du style ***********/
  /************************* */
  // @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  const [signUpStyle, setsignUpStyle] = useState({
    padding: "0.5em",
    marginInlieEnd: "1em",
    color: "white",
  });
  const style = {
    home: {
      padding: "0",
      margin: "0",
      background: "#000",
      height: "100%",
    },
    Onglet: {
      display: "flex",
      justifyContent: "flex-end",
    },
    elets: {
      display: "flex",
      marginRight: "2em",
      paddingTop: "0.5em",
    },
    Login: {
      color: "white",
      margin: "1em",
    },
    signUp: {
      color: "white",
      margin: "1em",
    },
    search: {
      margin: "1em",
    },
    signUpHover: {
      padding: "0.5em",
      marginInlieEnd: "1em",
      color: "white",
      textDecoration: "underline",
      transform: "scale(2)",
      transitionDuration: "0.5s",
    },

    description: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20vh",
    },
    textGradien: {
      padding: "0",
      margin: "0",
      fontFamily: "Poppins sans-serif",
      fontSize: "2rem",
      fontWeight: "5rem",
      textTransform: "uppercase",
      background: "linear-gradient(#e66465, #9198e5)",
      webkitBackgroundClip: "text",
      webkitTextFillColor: "transparent",
    },
    premierMot: {
      fontSize: "1rem",

      textAlign: "center",
      color: "#262626",
    },
    deuxiemeMot: {
      fontSize: "1rem",

      color: "#adb5bd",
    },
    deuxiemeMotBefore: {
      content: "",
      position: "absolute",
      top: "100%",
      width: "100%",
      left: 0,
      height: "3px",
      borderRadius: "2px",
      background:
        "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)",
    },
    main: {
      padding: "0",
      margin: "0",
      background: "#000",
      height: "100%",
    },
    allPage: {
      padding: "0",
      margin: "0",
      background: "#000",
    },
    carte: {
      display: "flex",
    },
    listUL: {
      padding: "0",
      margin: "0",
    },
  };
  const afficherSearchResult = (name) => {
    console.log("afficherSearchResult");

    if (!name) {
      return (
        <ul style={style.listUL}>
          {Listrestaurants?.map((e) => (
            <li style={style.infoResto}>
              <Onerestaurant
                key={e.identifiant}
                restaurantInfo={e}
              ></Onerestaurant>
            </li>
          ))}
        </ul>
      );
    } else {
      //find list resto et les afficher
      const restoTrouver = Listrestaurants?.filter((e) => e.name == name);

      console.log("restoTrouver.....", restoTrouver);
      dispatch(action.GetListInitial(restoTrouver));
      return (
        <ul style={style.listUL}>
          {restoTrouver?.map((e) => (
            <li
              style={style.infoResto}
              onClick={() => {
                console.log(`redirection vers : /restaurant/${e._id}`);

                history.push(`/restaurant/${e.identifiant}`);
              }}
            >
              <Onerestaurant restaurantInfo={e}></Onerestaurant>
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div style={style.allPage}>
      <div style={style.home}>
        {/* <img className="picture" src="../../background.jpg" /> */}
        <div style={style.Onglet}>
          <div style={style.elets}>
            <p style={style.Login} onClick={() => RedirectConnect("/login")}>
              Login <BsFillPersonPlusFill />
            </p>
            <p
              style={style.signUp}
              onClick={() => RedirectConnect("/inscription")}
            >
              Sign Up <BsFillPersonCheckFill />
            </p>
          </div>
        </div>
        <div style={style.description}>
          <h1 style={style.textGradien}>
            Find the best restaurants in the city
          </h1>
          <h3 style={style.premierMot}>
            {`si vous avez de mal a trouver la
             nouriture ou vous n'avez pas de
            temps a attendre dans un restaurant 
            find resto est la pour vous`}
          </h3>
          <p style={style.deuxiemeMot}>
            {`     
           Make it easy for you
            `}
          </p>
          <Form
            style={style.search}
            onSubmit={(e) => {
              e.preventDefault();
              // history.push(`/search/${textRechercher}`);
              //afficher seulement les resto qui commance avec ce name
              afficherSearchResult(textRechercher);
            }}
          >
            <input
              onChange={(e) => setTextRechercher(e.target.value)}
              className="search form-control"
              id="exampleDataList"
              placeholder="search..."
            ></input>
          </Form>
        </div>
      </div>
      <div style={style.main}>{!load && afficherSearchResult()}</div>
      <Footer />
    </div>
  );
};
export default Home;
