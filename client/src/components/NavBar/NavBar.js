import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <div>
        <div>
          <div className="div-btn-lp">
            <Link to="/">
              <button className="btn-lp">▲ LandingPage</button>
            </Link>
          </div>
          <h4 className="navbarh4">Videogames</h4>
          <h5  className="navbarh5">Catalogue</h5>
        </div>
      </div>
    </>
  );
};

export default NavBar;