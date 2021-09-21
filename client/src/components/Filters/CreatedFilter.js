import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCreated } from "../../actions/index";

const CreatedFilter = () => {
    const dispatch = useDispatch();
    const [optionCreated, setOptionCreated] = useState(null);  
    const Games = useSelector(store=> store.allGames);
  
  const handleCreated = (e) => {
    setOptionCreated(e.target.value)
        return dispatch(filterCreated(Games, e.target.value))
  } 
    return (
      <>
          <div>
          <select
            value={optionCreated}
            onChange={(e) => handleCreated(e)} >
            <option value="all">All</option>
            <option value="true">Created</option>
            <option value="false">Originals</option>
          </select>
          </div>
      </>
    );
  };
  
  export default CreatedFilter;