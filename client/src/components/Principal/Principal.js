import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import {
  addGame,
  loadingGame,
  addGenres
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import List from "../Cards/CardsList";
import Selectors from "../SearchBar/Selectors";
import './Principal.css'


const Principal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideogames = async () => {
      dispatch(loadingGame(true));
      const results = await axios.get("http://localhost:3001/videogames");
      const resultsGenres = await axios.get("http://localhost:3001/genres");
      dispatch(addGenres(resultsGenres.data));
      dispatch(addGame(results.data));
      dispatch(loadingGame(false));
    };
    getVideogames();
  }, []);

  const { loading, totalVg } = useSelector((store) => store);

  return (
    <>
      <div className='gamingzone'>
        <Link to="/">
          <button>LandingPage</button>
        </Link>
        <NavBar />

        <div>
          <Selectors />
        </div>
        <div>
          <Route exact path="/videogames" render={() => <List />} />
        </div>
      </div>
    </>
  );
};

export default Principal;
