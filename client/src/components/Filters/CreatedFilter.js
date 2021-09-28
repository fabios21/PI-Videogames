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
              className="button"
              value={optionCreated}
              onChange={(e) => handleCreated(e)} >
              <option value="all">Origin/All</option>
              <option value="false">Originals</option>
              <option value="true">Created</option>
            </select>
          </div>
      </>
    );
  };
  
  export default CreatedFilter;