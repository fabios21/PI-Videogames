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
                <h2>{data.name} </h2>
                <div className="container">
                  <div className="dimg">
                    <img  classname="img" src={data.background_image} alt="" width="500" />
                  </div>
                  <div className="div-r">
                    <div className="div-r1">
                      <h3>Rating</h3>
                      <p className="p">{data.rating}</p>
                      <h3>Released</h3>
                      <p>{data.released}</p>
                      <h3>Genres</h3>
                      {data.genres.map((p) => {
                        return <p>{p.name}</p>;
                      })}
                    </div>
                    <div className="div-r2">
                      <h3>Platforms</h3>
                      <div className="div-plat-db">
                        <p className="p-plat-db">{data.platforms.map((e, index) => {
                        return <p>{data.platforms[index]}</p>;
                      })}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="div-des">
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
                <div className="container">
                  <div className="dimg">
                    <img  classname="img" src={data.background_image} alt="" width="500" />
                  </div>
                  <div className="div-r">
                    <div className="div-r1">
                      <h3>Rating</h3>
                      <p className="p">{data.rating}</p>
                      <h3>Released</h3>
                      <p>{data.released}</p>
                      <h3>Genres</h3>
                      {data.genres.map((p) => {
                        return <p>{p.name}</p>;
                      })}
                    </div>
                    <div className="div-r2">
                      <h3>Platforms</h3> 
                      {data.platforms.map((p) => {
                        return <p>{p.platform.name}</p>;
                      })}
                    </div>
                  </div>
                </div>                
              </div>
            </div>
            <div className="div-des">
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