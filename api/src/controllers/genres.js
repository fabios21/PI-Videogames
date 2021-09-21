const {Genre} = require('../db');

async function getGenres (req, res, next) {
    try {
        const allGenres = await Genre.findAll();
        res.send(allGenres);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getGenres
}