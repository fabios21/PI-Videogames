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

  const selec = useSelector((store) => store);

  return (
    <>
      <div className='gamingzone'>
        <div className="div-btn-lp">
          <Link to="/">
            <button className="btn-lp">▲ LandingPage</button>
          </Link>
        </div>
        <div className="navbar">
          <NavBar/>
        </div>

        <div className="selectors">
          <Selectors/>
        </div>
        <div className="cards">
          <Route exact path="/videogames" render={() => <List />} />
        </div>
      </div>
    </>
  );
};

export default Principal;