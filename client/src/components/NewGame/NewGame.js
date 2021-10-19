import React from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import './NewGame.css'

const NewGame = () => {
  const [errors, setErrors] = useState({ form: 'Please, complete the form' });
    const [form, setForm] = useState({
        name: '',
        description: '',
        released: '',
        rating: 0,
        img: '',
        genres: [],
        platforms: []
    });

    const handleChange = e => {
        if (e.target.parentNode.parentNode.id === 'genres') {
            if (e.target.checked) {
                setForm(State => ({
                    ...State,
                    genres: form.genres.concat(e.target.value)
                }))
            } else {
                setForm(State => ({
                    ...State,
                    genres: form.genres.filter(x => e.target.value !== x)
                }))
            }
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            if (e.target.checked) {
                setForm(State => ({
                    ...State,
                    platforms: form.platforms.concat(e.target.name)
                }))
            } else {
                setForm(State => ({
                    ...State,
                    platforms: form.platforms.filter(x => e.target.name !== x)
                }))
            }
        }
        if (e.target.type !== 'checkbox') {
            setForm(State => ({
                ...State,
                [e.target.name]: e.target.value
            }))
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
        }))
    }
    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Name is required';
        } 
        if (!form.description) {
            errors.description = 'Description is required';
        }
        if (!form.rating) {
            errors.rating = 'Rating is required';
        }
        return errors;
    }
    const handleSubmit = e => {
        e.preventDefault()
        validate(form);
        let checkboxsErrors = []
        if (form.genres.length < 1) checkboxsErrors.push('Genres is required');
        if (form.platforms.length < 1) checkboxsErrors.push('Platforms is required');
        if (Object.values(errors).length || checkboxsErrors.length) {
            return alert(Object.values(errors).concat(checkboxsErrors).join('\n'))
        };
        axios.post('/videogames', form);
        console.log('consol de formulario', form)
        alert(`Videogame "${form.name}" created succesfully`);
        // window.location.href = 'http://localhost:3000/videogames';
    }

  return (
    <div className="newgame">
      <div className="div-back">
        <Link className="btn-back" to="/videogames">
          <button> ↩ Principal</button>
        </Link>
      </div>
      <form className="form-newgame" onSubmit={handleSubmit} onChange={handleChange}>
        <h1>Creat Videogame</h1>
        <div className="div">
              <div className="div-n">
                New Videogame
              </div>
              <div className="div-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name..."
                />
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description..."
                />
                <input
                  type="text"
                  name="img"
                  id="TheImg"
                  placeholder="Img url..."
                />
                <input
                  type="date"
                  id="released"
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
          <div id="genres" className="div-2">
            <h3>Select genres</h3>
            <div>
              <input type="checkbox" name="Action" value="1" id="Action"/>
              <label htmlFor="Action">Action</label>
            </div>
            <div>
              <input type="checkbox" name="Indie" value="2" id="Indie"/>
              <label htmlFor="Indie">Indie</label>
            </div>
            <div>
              <input type="checkbox" name="Adventure" value="3" id="Adventure"/>
              <label htmlFor="Adventure">Adventure</label>
            </div>
            <div>
              <input type="checkbox" name="RPG" value="4" id="RPG"/>
              <label htmlFor="RPG">RPG</label>
            </div>
            <div>
              <input type="checkbox" name="Puzzle" value="5" id="Puzzle"/>
              <label htmlFor="Puzzle">Puzzle</label>
            </div>
            <div>
              <input type="checkbox" name="Strategy" value="6" id="Strategy"/>
              <label htmlFor="Strategy">Strategy</label>
            </div>
            <div>
              <input type="checkbox" name="Arcade" value="7" id="Arcade"/>
              <label htmlFor="Arcade">Arcade</label>
            </div>
            <div>
              <input type="checkbox" name="Casual" value="8" id="Casual"/>
              <label htmlFor="Casual">Casual</label>
            </div>
            <div>
              <input type="checkbox" name="Shooter" value="9" id="Shooter"/>
              <label htmlFor="Shooter">Shooter</label>
            </div>
            <div>
              <input type="checkbox" name="Simulation" value="10" id="Simulation"/>
              <label htmlFor="Simulation">Simulation</label>
            </div>
            <div>
              <input type="checkbox" name="Platformer" value="11" id="Platformer"/>
              <label htmlFor="Platformer">Platformer</label>
            </div>
            <div>
              <input type="checkbox" name="Racing" value="12" id="Racing"/>
              <label htmlFor="platforms">Racing</label>
            </div>
            <div>
              <input type="checkbox" name="Massively-Multiplayer" value="13" id="Massively-Multiplayer"/>
              <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
            </div>
            <div>
              <input type="checkbox" name="Family" value="14" id="Family" />
              <label htmlFor="Family">Family</label>
            </div>
            <div>
              <input type="checkbox" name="Sports" value="15" id="Sports" />
              <label htmlFor="Sports">Sports</label>
            </div>
            <div>
              <input type="checkbox" name="Fighting" value="16" id="Fighting"/>
              <label htmlFor="Fighting">Fighting</label>
            </div>
            <div>
              <input type="checkbox" name="Board Games" value="17" id="Board Games"/>
              <label htmlFor="Board Games">Board Games</label>
            </div>
            <div>
              <input type="checkbox" name="Educational" value="18" id="Educational"/>
              <label htmlFor="Educational">Educational</label>
            </div>
            <div>
              <input type="checkbox" name="Card" value="19" id="Card"/>
              <label htmlFor="Card">Card</label>
            </div>
          </div>
          <div id="platforms" className="div-3" require>
            <h3>Select platforms</h3>
            <div>
              <input type="checkbox" name="PC" id="PC"/>
              <label htmlFor="PC">PC</label>
            </div>
            <div>
              <input type="checkbox" name="PlayStation 5" id="PlayStation 5 "/>
              <label htmlFor="PlayStation 5">PlayStation 5</label>
            </div>
            <div>
              <input type="checkbox" name="PlayStation 4" id="PlayStation 4"/>
              <label htmlFor="PlayStation 4">PlayStation 4</label>
            </div>
            <div>
              <input type="checkbox" name="Xbox One" id="Xbox One"/>
              <label htmlFor="Xbox One">Xbox One</label>
            </div>
            <div>
              <input type="checkbox" name="Nintendo Switch" id="Nintendo Switch" />
              <label htmlFor="Nintendo Switch">Nintendo Switch</label>
            </div>
            <div>
              <input type="checkbox" name="Xbox Series S/X" id="Xbox Series S/X" />
              <label htmlFor="Xbox Series S/X">Xbox Series S/X</label>
            </div>
            <div>
              <input type="checkbox" name="iOS" id="iOS" />
              <label htmlFor="iOS">iOS</label>
            </div>
            <div>
              <input type="checkbox" name="Android" id="Android" />
              <label htmlFor="Android">Android</label>
            </div>
            <div>
              <input type="checkbox" name="Nintendo 3DS" id="Nintendo 3DS" />
              <label htmlFor="Nintendo 3DS">Nintendo 3DS</label>
            </div>
            <div>
              <input type="checkbox" name="Nintendo DS" id="Nintendo DS" />
              <label htmlFor="Nintendo DS">Nintendo DS</label>
            </div>
            <div>
              <input type="checkbox" name="Nintendo DSi" id="Nintendo DSi" />
              <label htmlFor="Nintendo DSi">Nintendo DSi</label>
            </div>
            <div>
              <input type="checkbox" name="macOS" id="macOS" />
              <label htmlFor="macOS">macOS</label>
            </div>
            <div>
              <input type="checkbox" name="Linux" id="Linux" />
              <label htmlFor="Linux">Linux</label>
            </div>
            <div>
              <input type="checkbox" name="Xbox 360" id="Xbox 360" />
              <label htmlFor="Xbox 360">Xbox 360</label>
            </div>
            <div>
              <input type="checkbox" name="PlayStation 3" id="PlayStation 3" />
              <label htmlFor="PlayStation 3">PlayStation 3</label>
            </div>
            <div>
              <input type="checkbox" name="Xbox" id="Xbox" />
              <label htmlFor="Xbox">Xbox</label>
            </div>
            <div>
              <input type="checkbox" name="PlayStation" id="PlayStation" />
              <label htmlFor="PlayStation">PlayStation</label>
            </div>
            <div>
              <input type="checkbox" name="PS Vita" id="PS Vita" />
              <label htmlFor="PS Vita">PS Vita</label>
            </div>
            <div>
              <input type="checkbox" name="Wii U" id="Wii U" />
              <label htmlFor="Wii U">Wii U</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewGame;
