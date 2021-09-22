import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
  return (
      <div className="bg">
        <h1 className="title">VIDEOGAMES APP</h1>
        <div className="play">
          <div >
            <Link className="div-img-play" to="/videogames">
              <h2 className="h2-lp">Start</h2>
              <img className="img-play" src="https://png.pngtree.com/png-vector/20200822/ourlarge/pngtree-game-play-button-design-png-image_2331659.jpg" />
            </Link>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
