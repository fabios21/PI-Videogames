import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import './Description.css'

const Description = () => {
  function principal() {
    window.location.href = 'http://localhost:3000/videogames';
  }

  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((response) => {
        setData({ ...response.data });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div className="general">
        <div className="descriptionblack">
          <img className="loading" src="https://i.pinimg.com/originals/4a/83/87/4a838762167c369ae5cb9643118000a8.gif" />
        </div>
      </div>
    );
  }

  if (id.includes("-")) {
    return (
      <div className="general">
        <div className="description">
          <div className="x">
              <button  className="btn-x" onClick={principal}>
                X
              </button>
          </div>
          <div>
            <div>
              <div>
                <h2>{data.name} </h2>
                <div className="dimg">
                  <img classname="img" src={data.background_image} alt="" width="800"/>
                </div>
                <h3>Rating</h3>
                <p>{data.rating}</p>
                <h3>Released</h3>
                <p>{data.released}</p>
                <h3>Platforms</h3> 
                <p>{data.platforms}</p>             
                <h3>Genres</h3>
                {data.genres.map((g) => {
                  return <p>{g.name}</p>;
                })}
              </div>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="general">
        <div className="description">
          <div></div>
          <div></div>
          <div className="x">
              <button className="btn-x" onClick={principal}>
                X
              </button>
          </div>
          <div>
            <div>
              <div>
                <h2>{data.name} </h2>
                <div className="dimg">
                  <img  classname="img" src={data.background_image} alt="" width="1000" />
                </div>
                <h3>Rating</h3>
                <h2>{data.rating}</h2>
                <h3>Released</h3>
                <p>{data.released}</p>
                <h3>Platforms</h3> 
                {data.platforms.map((p) => {
                  return <p>{p.platform.name}</p>;
                })}
                <h3>Genres</h3>
                {data.genres.map((p) => {
                  return <p>{p.name}</p>;
                })}
              </div>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                {parse(`${data.description}`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};

export default Description;
