import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ videogame }) => {
  return (
    <div className="lo">
      {videogame && (
        <div className="card" key={videogame.id}>
          <img className="imgcard" src={videogame.background_image} alt="" />
          <div className="content">
            <h2 className="vgname">{videogame.name}</h2>
            <div className="content2">
              <h3 className="h3">Genres:</h3>
              <div className="genres">
                {videogame.genres &&
                  videogame.genres.map((g, index) => {
                    while (index < 3)
                      return <p>{g.name} </p>;
                })}
              </div>
            </div>
            <div className="button">
              <Link to={"/description/" + videogame.id}>
                <button className="details">Details</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;