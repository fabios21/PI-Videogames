import axios from "axios";

export const addGame = (payload) => {
  return {
    type: "VIDEOGAME",
    payload: payload,
  };
};

export const addGenres = (payload) => {
  return {
    type: "GENRES",
    payload: payload,
  };
};

export const searchGame = (name) => async (dispatch) => {
  const results = await axios.get(
    `/videogames?search=${name}`
  );
  const videogames = await results.data;

  if (videogames.length === 0) {
    alert("¡The videogame entered does not exist!");
    dispatch({ 
      type: "SEARCH_GAME", 
      payload: videogames });
  } else if (results.status === 200) {
    dispatch({ 
      type: "SEARCH_GAME", 
      payload: videogames });
  } else {
    dispatch({ 
      type: "SEARCH_GAME", 
      payload: [] });
      
  }
};

export const clearSearch = (payload) => {
  return {
    type: "SEARCH_GAME",
    payload: payload,
  };
};

export const loadingGame = (state) => {
  return {
    type: "STATE",
    payload: state,
  };
};

export const paginate = (payload) => ({
  type: "PAGINATE",
  payload: payload,
});

export const currentP = (payload) => {
  return {
    type: "CURRENT_PAGE",
    payload: payload,
  };
};

export const filterOrder = (payload) => {
  return {
    type: "FILTER_ORDER",
    payload: payload,
  };
};

export const filterGenre = (Games, type) => {
  return function (dispatch) {
    if (type === "all") {
      return dispatch({ 
        type: "FILTER_GENRE", 
        payload: Games
      });
    }
    var filterGames =
      Games &&
      Games.filter((vg) => {
        let videogamesGenres = vg.genres && vg.genres.map((genre) => genre.name);
        if (videogamesGenres.includes(type)) {
          return vg;
        }
      });

    return dispatch({ 
      type: "FILTER_GENRE", 
      payload: filterGames 
    });
  };
};

export const filterCreated = (Games, type) => {
  return function (dispatch) {
    if (type === "true") {
      var createdGame = Games && Games.filter((vg) => vg.created);
      return dispatch({ 
        type: "FILTER_CREATED", 
        payload: createdGame 
      });
    }
    if (type === "false") {
      var apiGames = Games && Games.filter((vg) => !vg.created);
      return dispatch({ 
        type: "FILTER_CREATED", 
        payload: apiGames 
      });
    }
    if (type === "all") {
      return dispatch({ 
        type: "FILTER_CREATED", 
        payload: Games 
      });
    }
  };
};

export const resetFilters = () => {
  return {
    type: "RESET_FILTER",
  };
};