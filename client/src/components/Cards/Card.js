import React from "react";
import { Link } from "react-router-dom";

const Card = ({ videogame }) => {
  return (
    <>
      {videogame && (
        <div key={videogame.id}>
          <img src={videogame.background_image} alt="" />
          <div>
            <h2>{videogame.name}</h2>
            <div>
              Genres:
              {videogame.genres &&
                videogame.genres.map((g, index) => {
                  while (index < 3)
                    return <div>{g.name} </div>;
                })}
            </div>
            <Link to={"/description/" + videogame.id}>
              <button>See more</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
