import React from "react";
import Onerestaurant from "../Onerestaurant/Onerestaurant";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router";

const Search = () => {
  const params = useParams();
  const Listrestaurants = useSelector((state) => state.listResto);
  const listTrouver = Listrestaurants.filter((e) => e.name == params.name);
  console.log(listTrouver);

  return (
    <div>
      <ul>
        {listTrouver?.map((e) => (
          <div
            onClick={() => {
              <Onerestaurant restaurantInfo={e}></Onerestaurant>;
            }}
          >
            <li>
              <Onerestaurant restaurantInfo={e}></Onerestaurant>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Search;
