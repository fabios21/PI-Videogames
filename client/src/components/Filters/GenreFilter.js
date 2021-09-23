import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterGenre } from "../../actions/index";


const GenreFilter = () => {
  const dispatch = useDispatch();
  const [optionGenre, setOptionGenre] = useState(null);
  const { genres } = useSelector((store) => store);

  const Games = useSelector(store=> store.allGames);

  const handleGenre = (e) => {
    setOptionGenre(e.target.value)
        return dispatch(filterGenre(Games, e.target.value))
  };

  return (
    <>
        <div>
        <select
          className="button"
          value={optionGenre}
          onChange={(e) => handleGenre(e)}
        >
          <option value="all">Genres/All</option>
          {genres.map((genre) => {
            return <option key={genre.name} value={genre.name}>{genre.name} </option>;
          })}
        </select>
        </div>
    </>
  );
};

export default GenreFilter;
