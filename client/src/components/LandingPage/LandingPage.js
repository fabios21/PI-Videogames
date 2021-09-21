import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <div>
        <h1>Videogames APP</h1>
        <Link to="/videogames">
          <button>Play ▶️</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
