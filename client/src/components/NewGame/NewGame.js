import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './NewGame.css'

const NewGame = () => {
  const genres = useSelector((store) => store.genres);

  return (
    <div className="newgame">
      <div className="div-back">
        <Link className="btn-back" to="/videogames">
          <button> ↩ Principal</button>
        </Link>
      </div>
      <form className="form-newgame" action="http://localhost:3001/videogames" method="POST">
        <h1>Creat Videogame</h1>
        <div className="div">
              <div className="div-n">
                New Videogame
              </div>
              <div className="div-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                />
                <p className="required">*Required</p>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description..."
                />
                <p className="required">*Required</p>
                <input
                  type="text"
                  name="img"
                  id="TheImg"
                  placeholder="Img url..."
                />
                <input
                  type="date"
                  name="released"
                  placeholder="released..."
                />
                <div>
                  <h3>Rating</h3>
                  <select name="rating" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <button className="btn-add" type="submit">
                  Add Game
                </button>
          </div>
          <div  className="div-2">
            <h3>Select genres</h3>
            <div>
              {genres.map((genre) => {
                return (
                  <div key={genre.id}>
                    <input type="checkbox" name="genres" value={genre.id} />
                    <label htmlFor="genres">{genre.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div  className="div-3">
            <h3>Select platforms</h3>
            <p className="required">*Required</p>
            <div>
              <input type="checkbox" name="platforms" value="PC"/>
              <label htmlFor="platforms">PC</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="PlayStation 5 "/>
              <label htmlFor="platforms">PlayStation 5</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="PlayStation 4"/>
              <label htmlFor="platforms">PlayStation 4</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Xbox One"/>
              <label htmlFor="platforms">Xbox One</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Nintendo Switch" />
              <label htmlFor="platforms">Nintendo Switch</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Xbox Series S/X" />
              <label htmlFor="platforms">Xbox Series S/X</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="iOS" />
              <label htmlFor="platforms">iOS</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Android" />
              <label htmlFor="platforms">Android</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Nintendo 3DS" />
              <label htmlFor="platforms">Nintendo 3DS</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Nintendo DS" />
              <label htmlFor="platforms">Nintendo DS</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Nintendo DSi" />
              <label htmlFor="platforms">Nintendo DSi</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="macOS" />
              <label htmlFor="platforms">macOS</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Linux" />
              <label htmlFor="platforms">Linux</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Xbox 360" />
              <label htmlFor="platforms">Xbox 360</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="PlayStation 3" />
              <label htmlFor="platforms">PlayStation 3</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Xbox" />
              <label htmlFor="platforms">Xbox</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="PlayStation" />
              <label htmlFor="platforms">PlayStation</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="PS Vita" />
              <label htmlFor="platforms">PS Vita</label>
            </div>
            <div>
              <input type="checkbox" name="platforms" value="Wii U" />
              <label htmlFor="platforms">Wii U</label>
            </div> 
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewGame;
