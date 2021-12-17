import React from "react";
import Backgroundresto from "../../../src/ressources/photos/147-1471354_3d-background-for-pixellab.jpg";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Casseroul from "../Casseroul/Casseroul";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";


const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState();
  const [MenuCliq, setMenuCliq] = useState(false);

  const param = useParams();

  useEffect(() => {
    const getRestaurantDetail = async () => {
      console.log("le param estttttttttttt" + param.id);
      try {
        const findRestaurant = await axios.get(
          `http://localhost:5000/restaurants/${param.id}`
        );
        //const findRestaurant = allRestaurant.find((e) => e._id == param._id);
        console.log("trouver....... ", findRestaurant.data.data);

        if (findRestaurant.request.status == 200) {
          setRestaurant(findRestaurant.data.data);
          return;
        }
      } catch {
        console.log("there is an error");
      }
    };
    getRestaurantDetail();
  }, []);

    const style = {
        home: {}
        ,
    backgroudstyle: {
      color: "hsl(323,21% ,16%)",
      //color: "hsl(317,100% ,54%)",
      border: "currentColor 1px solid ",
      backgroundSize: "cover",
      borderRadius: "0.25em",
      textShadow: "0 0 1.25em currentColor",
      boxShadow: "inset 0 0 0.5em 0 currentColor, 0 0 0.5em 0 currentColor",
      transform: "translate3d(8.748px, 0.126064px, 0px)",
    },
    list: {},
    main: {
      //"linear-gradient(#e66465, #9198e5)", //("to right, #ed6ea0 0%, #ec8c69 100%"),
      display: "flex",
      color: "gold",
      alignContent: "flexStart",
      justifyContenent: "center",
      opacity: "0.2",
         margin: "12px",
    
    },

    after: {
      content: "",
      backgroundImage: "url(" + { Backgroundresto } + ")",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      zIndex: "-1",
    },
  };

  const [clickValues, setClickValues] = useState("MenuCliq");
  return (
      <div data-router-wrapper   >

          <Navbar restaurant={restaurant}></Navbar>

          {/*========= menu=============== */}
          <main  data-router-wrapper >
              <section style={style.home}  >
                     <div data-router-view ="name"  style={style.main}>
                             {restaurant?.menu.split(",").map((e) => (
                                                              <div style={style.backgroudstyle}>
                                                                 <div>
                                                                 <h1> {` ${e}`} </h1>
                                                                 <p>  you are in the rigth chose </p>
                                                                </div>

                                                                 <img  src =""  alt="back photo"/>
                                                           
                                                             </div>))
                      }

       
                     </div>
              </section>
          </main>

      {/*========= reserver une table
        <div  vis style={style.main}>
        {restaurant?.tables.map((e) => (
          <div style={style.backgroudstyle}>
            <h1> {` ${e.number}`} </h1>
            <h1> {` ${e.etat}`} </h1>
            <img />
            <bottom> go</bottom>
          </div>
        ))}
      </div>
       =============== */}
    </div>
  );
};

export default Restaurant;
