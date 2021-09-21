const { Op } = require("sequelize");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

async function getAllVideogames(req, res, next) {
  const name = req.query.search;

  let apiVideogames = [];
  const pages = [`https://api.rawg.io/api/games?key=${API_KEY}`];
  if (name) {
    let videogamesData = [];

    try {
      const info = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
      );
      const apiVideogames = info.data.results;

      let apiGames = apiVideogames.map((game) => {
        let videoGame = {
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres,
          platforms: game.platforms,
          created: false,
        };
        return videoGame;
      });
      videogamesData = videogamesData.concat(apiGames);
    } catch (error) {
      next(error);
    }

    try {
      const dbVideogames = await Videogame.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        attributes: [
          "id",
          "name",
          "released",
          "background_image",
          "rating",
          "platforms",
          "created",
        ],
        include: [
          {
            model: Genre,
            through: {
              attributes: [],
            },
          },
        ],
      });
      videogamesData = videogamesData.concat(dbVideogames);
      return res.status(200).json(videogamesData);
    } catch (error) {
      next(error);
    }
  }
  try {
    for (let i = 0; i < 5; i++) {
      const info = await axios.get(`${pages[i]}`);
      pages.push(info.data.next);

      let gamesFromApi = info.data.results.map((game) => {
        let gameFromApi = {
          id: game.id,
          name: game.name,
          released: game.released,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres,
          platforms: game.platforms,
          created: false,
        };
        return gameFromApi;
      });

      apiVideogames = apiVideogames.concat(gamesFromApi);
    }
    const dbVideogames = await Videogame.findAll({
      attributes: [
        "id",
        "name",
        "released",
        "background_image",
        "rating",
        "platforms",
        "created",
      ],
      include: [
        {
          model: Genre,
          through: {
            attributes: [],
          },
        },
      ],
    });

    apiVideogames = apiVideogames.concat(dbVideogames);
    res.status(200).json(apiVideogames);
  } catch (error) {
    next(error);
  }
}


async function createVideogame(req, res, next) {
  const {
    name,
    description,
    released,
    img,
    rating,
    platforms,
    genres,
    created = true,
  } = req.body;
  
  try {
    let newVideogame = await Videogame.create({
      name: name,
      description: description,
      released: released,
      background_image: img,
      rating: rating,
      platforms: platforms,
      created,
    });

    (await genres) && newVideogame.setGenres(genres);

    const id = newVideogame.id;

    return res.redirect(`http://localhost:3000/description/${id}`);

  } catch (error) {
    next(error);
  }
 
}

async function getVideogameById(req, res, next) {
  const id = req.params.id;

  if (id.includes("-")) {
    try {
      const game = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            through: {
              attributes: [],
            }
          }
        ],
      });

      return res.status(200).json(game);

    } catch (error) {
      next(error);
    }

  } else {
    try {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      let game = {
        id: data.id,
        name: data.name,
        description: data.description,
        released: data.released,
        background_image: data.background_image,
        rating: data.rating,
        genres: data.genres,
        platforms: data.platforms,
      };

      return res.status(200).json(game);

    } catch (error) {
      next(error);
    }
  }
}



module.exports = {
    getAllVideogames,
    createVideogame,
    getVideogameById,
  };