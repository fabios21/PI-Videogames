import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchGame,
  loadingGame,
  clearSearch,
  resetFilters,
} from "../../actions/index";
import './SearchBar.css';


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    return dispatch(searchGame(e.target.value))
  };


const handleSubmit = (e) =>  {
  e.preventDefault();
  
  dispatch(loadingGame(true));
  if (search.length > 0) {
    dispatch(searchGame(search));
    dispatch(resetFilters());
  } else {
    dispatch(clearSearch([]));
    dispatch(resetFilters());
  }
  setSearch("");
  dispatch(loadingGame(false));
}

  return (
    <>
      <div>
        <form
          className="form-search" onSubmit={(e) => handleSubmit(e)}
        >
          <input 
            className="search"
            type="text"
            name="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="search-submit" type="submit"> Search 🔎
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;