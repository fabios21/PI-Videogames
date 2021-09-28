import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({ videogame }) => {
  return (
    <div>
      {videogame && (
        <div className="card" key={videogame.id}>
          <Link to={"/description/" + videogame.id}>
            <img className="imgcard" src={videogame.background_image || "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xbox-series-x-gaming-console-1612972422.gif"} alt="" />
          </Link>
          <div className="content">
            <h2 className="vgname">{videogame.name}</h2>
            <div className="content2">
              <h3 className="h3">Genres:</h3>
              <div className="genres">
                {videogame.genres.map((g, index) => {
                    while (index < 3)
                      return <p>-{g.name}-</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
