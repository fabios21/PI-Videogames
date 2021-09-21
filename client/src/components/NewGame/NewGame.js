import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewGame = () => {
  const genres = useSelector((store) => store.genres);

  return (
    <>
      <div>
        <Link to="/videogames">
          <button> 🔙 Principal</button>
        </Link>
      </div>
      <form action="http://localhost:3001/videogames" method="POST">
        <div>
          <div>
            <div>
              <div>
                <button type="submit">
                  Add Game
                </button>
                <input
                  type="text"
                  name="name"
                  placeholder="Name..."
                />
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description..."
                />
                <input
                  type="text"
                  name="img"
                  id="TheImg"
                  placeholder="Cover url..."
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
              </div>
            </div>
          </div>
          <div>
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
          <div>
            <h3>Select platforms</h3>
            <input type="checkbox" name="platforms" value="PC" />
            <label htmlFor="platforms">PC</label>
            <input type="checkbox" name="platforms" value="PlayStation 5" />
            <label htmlFor="platforms">PlayStation 5</label>
            <input type="checkbox" name="platforms" value="PlayStation 4" />
            <label htmlFor="platforms">PlayStation 4</label>
            <input type="checkbox" name="platforms" value="Xbox One" />
            <label htmlFor="platforms">Xbox One</label>
            <input type="checkbox" name="platforms" value="Nintendo Switch" />
            <label htmlFor="platforms">Nintendo Switch</label>
            <input type="checkbox" name="platforms" value="Xbox Series S/X" />
            <label htmlFor="platforms">Xbox Series S/X</label>
            <input type="checkbox" name="platforms" value="iOS" />
            <label htmlFor="platforms">iOS</label>
            <input type="checkbox" name="platforms" value="Android" />
            <label htmlFor="platforms">Android</label>
            <input type="checkbox" name="platforms" value="Nintendo 3DS" />
            <label htmlFor="platforms">Nintendo 3DS</label>
            <input type="checkbox" name="platforms" value="Nintendo DS" />
            <label htmlFor="platforms">Nintendo DS</label>
            <input type="checkbox" name="platforms" value="Nintendo DSi" />
            <label htmlFor="platforms">Nintendo DSi</label>
            <input type="checkbox" name="platforms" value="macOS" />
            <label htmlFor="platforms">macOS</label>
            <input type="checkbox" name="platforms" value="Linux" />
            <label htmlFor="platforms">Linux</label>
            <input type="checkbox" name="platforms" value="Xbox 360" />
            <label htmlFor="platforms">Xbox 360</label>
            <input type="checkbox" name="platforms" value="PlayStation 3" />
            <label htmlFor="platforms">PlayStation 3</label>
            <input type="checkbox" name="platforms" value="Xbox" />
            <label htmlFor="platforms">Xbox</label>
            <input type="checkbox" name="platforms" value="PlayStation" />
            <label htmlFor="platforms">PlayStation</label>
            <input type="checkbox" name="platforms" value="PS Vita" />
            <label htmlFor="platforms">PS Vita</label>
            <input type="checkbox" name="platforms" value="Wii U" />
            <label htmlFor="platforms">Wii U</label>         
          </div>
        </div>
      </form>
    </>
  );
};

export default NewGame;
