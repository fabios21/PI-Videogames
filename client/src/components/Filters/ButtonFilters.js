import React from "react";
import { useDispatch,useSelector } from "react-redux";
import Filters  from "../Filters/Filters";
import './ButtonFilters.css';

const ButtonFilters = () => {
  const dispatch = useDispatch();
  const az = "az";
  const za = "za";
  const asc = "asc";
  const des = "des"
 
const Games = useSelector(store=> store.videogames);

const handleF = (type) => { 
  return dispatch(Filters(Games, type)) 
}

  return (
    <>
      <div className="div-order">
          <button
             className="button"onClick={() => handleF(az)}> Name: A-Z </button>
          <button
             className="button" onClick={() => handleF(za)}> Name: Z-A </button>
          <button
             className="button" onClick={() => handleF(asc)}> Rating ↑-↓	</button>
          <button
             className="button" onClick={() => handleF(des)}> Rating ↓-↑ </button>
        </div>
    </>
  );
};

export default ButtonFilters;