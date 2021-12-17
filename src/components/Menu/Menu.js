import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Menu = (props) => {
  const Listrestaurants = useSelector((state) => state.listResto);

  const categories = props.restaurant?.menu?.split(",");
  console.log("categories", categories);

  const style = {
    categoriesStyle: {
      height: "60vh",
      width: "40%",
      backgroundColor: "",
    },
  };

  return (
    <div>
      {categories?.map((e) => (
        <div style={style.categoriesStyle}>
          <ul>
            <p>hudufezie... 100 DA</p>
            <p>hudufezie... 100 DA</p>
            <p>hudufezie... 100 DA</p>
            <p>hudufezie... 100 DA</p>
            <li>
              <p> {e}</p>
            </li>
          </ul>
        </div>
      ))}
      ;
    </div>
  );
};

export default Menu;
